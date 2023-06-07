import React, { useState } from 'react';
import styled from "styled-components";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { update } from "~/features/api/discountAPI"

const ImgDiv = styled.div`
  width: 120px;
  height: 120px;
  overflow: hidden;
`

function EditModal({ item }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(item.name);
  const [code, setCode] = useState(item.code);
  const [kind, setKind] = useState(item.kind);
  const [value, setValue] = useState(item.value);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setOpen(false);
    update(item.id, name, code, kind, value)
      .then(response => {
        window.location.reload()
      })
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleKindChange = (event) => {
    setKind(event.target.value);
  };

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        <CreateOutlinedIcon/>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nhập thông tin</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            value={name}
            onChange={handleNameChange}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Code"
            fullWidth
            value={code}
            onChange={handleCodeChange}
          />
          <FormControl variant="standard" sx={{ m: 1, width: 240, marginTop: 1, marginLeft: 0}} >
            <InputLabel id="demo-simple-select-standard-label">Kind</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={kind}
              onChange={handleKindChange}
              label="Kind"
              style={{width: 360}}
            >
            {
              ["percent", "cash"].map((kind) => {
                return <MenuItem value={kind}>{kind}</MenuItem>
              })
            }
            </Select>
          </FormControl>
          <TextField
            autoFocus
            margin="dense"
            label="Value"
            fullWidth
            value={value}
            onChange={handleValueChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Hủy bỏ
          </Button>
          <Button onClick={handleSave} color="primary">
            Lưu thông tin
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditModal;
