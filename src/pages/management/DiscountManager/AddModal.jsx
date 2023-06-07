import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { create } from "~/features/api/discountAPI"

function AddModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [kind, setKind] = useState('');
  const [value, setValue] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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

  const handleSave = () => {
    setOpen(false);
    create(name, code, kind, value)
      .then(response => {
        window.location.reload()
      })
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        <AddCircleOutlineOutlinedIcon/>
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
                return <MenuItem value={kind} sx={{ width: 240 }}>{kind}</MenuItem>
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

export default AddModal;