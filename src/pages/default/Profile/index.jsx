import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import Box from '@mui/material/Box';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import EditModal from "~/pages/default/Profile/EditModal"
import ChangePassword from './ChangePassword';
import Orders from './Orders';
export default function Profile() {

  const user = useSelector(state => state.auth.user)

  return (
    <div className="gradient-custom-2" style={{ backgroundColor: '#EEF2F6' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '180px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '160px' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '160px', zIndex: '1' }} />
                </div>
                <div className="ms-3" style={{ marginTop: '112px' }}>
                  <MDBTypography tag="h5">{ user.full_name }</MDBTypography>
                  <MDBCardText>New York</MDBCardText>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div className="px-3">
                    <EditModal user = {user}/>
                  </div>
                  <div>
                    <ChangePassword  user = {user}/>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '12px' }}>
                    <BadgeOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField label="Full Name" fullWidth value={user.full_name} InputProps={{readOnly: true}}/>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '12px' }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField label="Username" fullWidth value={user.user_name} InputProps={{readOnly: true}}/>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '12px' }}>
                    <NoteAltIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField label="Email" fullWidth value={user.email} InputProps={{readOnly: true}}/>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '12px' }}>
                    <HomeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField label="Address" fullWidth value={user.address} InputProps={{readOnly: true}}/>
                  </Box>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Recent Order</MDBCardText>
                  <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
                </div>
                <Orders id={user.id}/>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}