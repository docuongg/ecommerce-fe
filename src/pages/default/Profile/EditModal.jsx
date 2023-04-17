import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { update } from "~/features/api/userAPI"

function EditModal({ user }) {
  const [open, setOpen] = useState(false);

  const [fullName, setFullName] = useState(user.full_name);
  const [username, setUsername] = useState(user.user_name);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSave = () => {
    setOpen(false);
    update(user.id, fullName, username, email, address)
      .then(response => {
        window.location.reload()
      })
  };

  return (
    <>
      <Button variant="outlined" style={{marginTop: '12px'}} onClick={handleOpen}>
        Edit Profile
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nhập thông tin</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Full Name"
            fullWidth
            value={fullName}
            onChange={handleNameChange}
          />
          <TextField
            autoFocus
            margin="dense"
            label="User Name"
            fullWidth
            value={username}
            onChange={handleUsernameChange}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Email"
            fullWidth
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Address"
            fullWidth
            value={address}
            onChange={handleAddressChange}
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
