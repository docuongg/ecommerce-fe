import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { update } from "~/features/api/productAPI"

function EditModal({ item, attach }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [unit, setUnit] = useState(item.unit);
  const [price, setPrice] = useState(item.price);
  const [category, setCategory] = useState(item.category_id);

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

  const handleSave = () => {
    setOpen(false);
    update(item.id, name, description, unit, price, category)
      .then(response => {
        window.location.reload()
      })
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
          
          <FormControl variant="standard" sx={{ m: 1, width: 240, marginTop: 1, marginLeft: 0}} >
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

export default EditModal;
