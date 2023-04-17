import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import { update } from "~/features/api/userAPI"
import { changePassword } from '~/features/api/authAPI';

function ChangePassword( {user} ) {
  const [open, setOpen] = useState(false);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleNewPasswordConfirmationChange = (event) => {
    setNewPasswordConfirmation(event.target.value);
  };

  const handleSave = () => {
    setOpen(false);
    changePassword(user.email, newPassword, newPasswordConfirmation)
      .then(response => {
        localStorage.setItem('password', newPassword)
        window.location.reload()
      })
  };

  return (
    <>
      <Button variant="outlined" style={{marginTop: '12px'}} onClick={handleOpen}>
        Change Password
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nhập thông tin</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Current Password"
            fullWidth
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
          />
          <TextField
            autoFocus
            margin="dense"
            label="New Password"
            fullWidth
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
          <TextField
            autoFocus
            margin="dense"
            label="New Password Confirmation"
            fullWidth
            value={newPasswordConfirmation}
            onChange={handleNewPasswordConfirmationChange}
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

export default ChangePassword;
