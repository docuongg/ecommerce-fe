import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

function BasicModal({children}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // console.log(`Name: ${name}, Email: ${email}`);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        <CreateOutlinedIcon/>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nhập thông tin</DialogTitle>
        <DialogContent>
          {children}
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
    </div>
  );
}

export default BasicModal;