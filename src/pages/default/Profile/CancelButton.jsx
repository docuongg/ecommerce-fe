import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';


import { update } from "~/features/api/orderAPI"

function CancelButton({ item }) {

  const cancelOrder = () => {
    update(item.id, 'canceled')
      .then(response => {
        window.location.reload()
      })
  }

  return (
    <Button variant="contained" color="secondary" onClick={cancelOrder} style={{display: item.status === 'pending' ? "block" : "none"}}>
        <CancelOutlinedIcon/>
    </Button>
  )
}

export default CancelButton;
