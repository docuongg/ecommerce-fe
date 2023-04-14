import React from "react"
import styled from "styled-components";
import { EnhancedTable } from "~/components/components/table";
import { useSelector, useDispatch } from "react-redux";
import { destroy, index } from "~/features/api/orderAPI"
import { useState, useEffect } from "react";
import EditModal from "./EditModal";
import AddModal from "./AddModal";
import { setCategories, delCategories } from "~/features/slice/categorySlice";
import TabPanel from "./TabPill";
// import Typography from '@mui/material/Typography';
import { Tabs, Tab } from '@mui/material';
import Box from '@mui/material/Box';

const Container = styled.div`
  background-color: #fff;
  padding: 24px;
  border-radius: 18px;
  height: 100%
`

const RowContainer = styled.div`
  display: flex;
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 24px;
`

const ColContainer = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  flex: 1;
`

function OrderManager() {

  const headCells = [
    {
      id: 'id',
      numeric: false,
      disablePadding: true,
      label: 'ID',
    },
    {
      id: 'description',
      numeric: true,
      disablePadding: false,
      label: 'Description',
    },
    {
      id: 'total_price',
      numeric: true,
      disablePadding: false,
      label: 'Total Price',
    },
    {
      id: 'status',
      numeric: true,
      disablePadding: false,
      label: 'Status',
    },
    {
      id: 'user_id',
      numeric: true,
      disablePadding: false,
      label: 'User ID',
    }
  ];

  const dispatch = useDispatch();
   
  const categories = useSelector(state => state.category.categories)
  const [category, setCategory] = useState(categories)
  
  useEffect(() => {
    index()
    .then(response => {
      setCategory(response.data)
      dispatch(setCategories(response.data));
    });
  }, [categories.length])

  const handleDelButton = (ids) => {
    ids.forEach((id) => {
      destroy(id)
        .then((response) => {
          dispatch(delCategories(id))
        })
    })
  }

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return ( 
    <div>
      <RowContainer>
        <ColContainer>
          <Container>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Pending" sx={{ textTransform: 'none' }} />
                <Tab label="Confirm" sx={{ textTransform: 'none' }} />
                <Tab label="Shipping" sx={{ textTransform: 'none' }} />
                <Tab label="Received" sx={{ textTransform: 'none' }} />
                <Tab label="Canceled" sx={{ textTransform: 'none' }} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <EnhancedTable rows={category.filter(obj => obj.status == 'pending')} headCells={headCells} title={'Pending'} clickDel={handleDelButton} EditButton={EditModal } />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <EnhancedTable rows={category.filter(obj => obj.status == 'confirm')} headCells={headCells} title={'Confirm'} clickDel={handleDelButton} EditButton={EditModal } />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <EnhancedTable rows={category.filter(obj => obj.status == 'shipping')} headCells={headCells} title={'Shipping'} clickDel={handleDelButton} EditButton={EditModal } />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <EnhancedTable rows={category.filter(obj => obj.status == 'received')} headCells={headCells} title={'Received'} clickDel={handleDelButton} EditButton={EditModal } />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <EnhancedTable rows={category.filter(obj => obj.status == 'canceled')} headCells={headCells} title={'Canceled'} clickDel={handleDelButton} EditButton={EditModal } />
              </TabPanel>
            </Box>
          </Container> 
        </ColContainer>
      </RowContainer>
{/*       

      <RowContainer>
        <ColContainer>
          <EnhancedTable rows={category} headCells={headCells} title={'Order'} clickDel={handleDelButton} EditButton={EditModal } AddButton={AddModal} />
        </ColContainer>
      </RowContainer> */}
    </div>
  )
}

export default OrderManager;