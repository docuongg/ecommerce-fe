import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

import { index } from "~/features/api/user/userDiscountAPI"

function DiscountModal({ user }) {
  const [open, setOpen] = useState(false);
  const [discounts, setDiscounts] = useState([])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    index(user.id)
    .then(response => {
      setDiscounts(response.data)
    })
  }, [])

  return (  
    <>
      <Button variant="outlined" style={{marginTop: '12px'}} onClick={handleOpen}>
        My Discount
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Phiếu Giảm Giá </DialogTitle>
        <DialogContent>
          <TableContainer component={Paper} style={{marginTop: '30px', width: 480}}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Code</TableCell>
                  {/* <TableCell>Amount</TableCell> */}
                  {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  discounts.map((discount, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{index+1}</TableCell>
                        <TableCell>{discount.discount.name}</TableCell>
                        <TableCell>{discount.discount.code}</TableCell>
                        {/* <TableCell>{discount.amount}</TableCell> */}
                      </TableRow>
                    )
                  })
                }
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Đóng
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DiscountModal;