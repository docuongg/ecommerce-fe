import React from 'react';
import { Button } from '@material-ui/core';
import FileDownloadDoneOutlinedIcon from '@mui/icons-material/FileDownloadDoneOutlined';
import { update } from '~/features/api/orderAPI'

function ConfirmButton({ item }) {

  const handleClickConfirm = (item) => {
    let newStatus = item.status === 'pending' ? 'confirm' : 'shipping'
    update(item.id, newStatus)
      .then(response => {
        window.location.reload()
      })
  };

  return (
    <Button variant="contained" color="primary" onClick={() => handleClickConfirm(item)}>
      <FileDownloadDoneOutlinedIcon/>
    </Button>
  );
}

export default ConfirmButton;
