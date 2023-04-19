import React, { useState } from 'react';
import styled from "styled-components";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { update } from "~/features/api/categoryAPI"

const ImgDiv = styled.div`
  width: 120px;
  height: 120px;
  overflow: hidden;
`

function EditModal({ item }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(item.name);
  const [avatar, setAvatar] = useState(item.avatar_url);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setOpen(false);
    update(item.id, name, avatar)
      .then(response => {
        window.location.reload()
      })
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAvatarChange = (event) => {

    setAvatar(event.target.files[0]);
  }

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        <CreateOutlinedIcon/>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nhập thông tin</DialogTitle>
        <DialogContent>
          {avatar && (
            <ImgDiv>
              <img src={avatar} alt="Preview" style={{maxWidth: '100%'}}/>
            </ImgDiv>
          )}
          <TextField
            id="file"
            type="file"
            name="file"
            onChange={handleAvatarChange}
          />
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
