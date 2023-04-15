import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { register } from "~/features/api/authAPI"

function AddModal( {} ) {
  const [open, setOpen] = useState(false);
  const [fullName, setFullName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();

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

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmationChange = (event) => {
    setPasswordConfirmation(event.target.value);
  };

  const handleSave = () => {
    setOpen(false);
    register(fullName, username, password, passwordConfirmation, email, address)
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
            label="Password"
            fullWidth
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Password Confirmation"
            fullWidth
            type="password"
            value={passwordConfirmation}
            onChange={handlePasswordConfirmationChange}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Email"
            fullWidth
            type="email"
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

export default AddModal;