import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';
import { index } from "~/features/api/userAPI";
import { create } from '~/features/api/user/userDiscountAPI';

function SendModal({ item }) {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setOpen(false);
    selectedOptions.forEach((id, index) => {
      create(id, item.id)
      .then(response => {
        setSelectedOptions([])
        if (index == selectedOptions.length - 1) {
          toast.success('Send Discount Success!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
    })
  };

  useEffect(() => {
    index()
    .then(response => {
      setUsers(response.data)
    })
  }, [])

  const handleChange = (event) => {
    setSelectedOptions(event.target.value);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        <SendIcon/>
      </Button>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>Nhập thông tin</DialogTitle>
        <DialogContent>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-multiple-checkbox-label">Select options</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              style={{width: 500}}
              multiple
              value={selectedOptions}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'Select options' }}
              renderValue={(selected) => (
                <div>
                  {selected.map((option) => (
                    <Button key={option} size="small" variant="outlined" sx={{ m: 0.5 }}>
                      {option}
                    </Button>
                  ))}
                </div>
              )}
            >
              <MenuItem value="all" key={users.length + 1}>All</MenuItem>
              {
                users.map((user, index) => {
                  return <MenuItem value={user.id} key={index} disabled={selectedOptions.includes("all")}>{user.full_name}</MenuItem>
                })
              }
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Hủy bỏ
          </Button>
          <Button onClick={handleSave} color="primary">
            Gửi
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default SendModal;
