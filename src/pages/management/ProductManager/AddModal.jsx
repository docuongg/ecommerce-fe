import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { create } from "~/features/api/productAPI"

function AddModal( {attach} ) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [unit, setUnit] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [avatar, setAvatar] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAvatarChange = (event) => {
    setAvatar(event.target.files[0]);
  }

  const handleSave = () => {
    setOpen(false);
    create(category, name, description, unit, price, avatar)
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
          <TextField
            autoFocus
            margin="dense"
            label="Description"
            fullWidth
            value={description}
            onChange={handleDescriptionChange}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Unit"
            fullWidth
            value={unit}
            onChange={handleUnitChange}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Price"
            fullWidth
            value={price}
            onChange={handlePriceChange}
          />

          <FormControl variant="standard" sx={{ m: 1, width: 240, marginTop: 1, marginLeft: 0 }} >
            <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={category}
              onChange={handleCategoryChange}
              label="Category"
            >
            {
              attach.map((category) => {
                return <MenuItem value={category.id}>{category.name}</MenuItem>
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
            Lưu thông tin
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddModal;