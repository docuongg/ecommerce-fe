import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { update } from "~/features/api/categoryAPI"

function EditModal({ item }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(item.name);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setOpen(false);
    update(item.id, name)
      .then(response => {
        window.location.reload()
      })
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
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
