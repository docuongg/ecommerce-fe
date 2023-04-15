import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Box from '@mui/material/Box';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

import { index } from "~/features/api/purchasedProductAPI"

function ShowModal({ item }) {

  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([])

  const handleOpen = () => {
    setOpen(true);
    index(item.id)
      .then(response => {
        setProducts(response.data)
      })
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        <VisibilityOutlinedIcon/>
      </Button>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>Order Information</DialogTitle>
        <DialogContent style={{width: '600px', padding: "0 48px"}}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '12px' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField label="Full Name" fullWidth value={item.user.full_name} InputProps={{readOnly: true}}/>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '12px' }}>
            <HomeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField label="Address" fullWidth value={item.user.address} InputProps={{readOnly: true}}/>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '12px' }}>
            <NoteAltIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField label="Note" fullWidth value={item.description} InputProps={{readOnly: true}}/>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '12px' }}>
            <MonetizationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField label="Total Price" fullWidth value={item.total_price} InputProps={{readOnly: true}}/>
          </Box>
          <TableContainer component={Paper} style={{marginTop: '30px'}}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Amount</TableCell>
                  {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  products.map((product, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{index+1}</TableCell>
                        <TableCell>{product.product.name}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>{product.amount}</TableCell>
                      </TableRow>
                    )
                  })
                }
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" style={{margin: "24px"}}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ShowModal;
