import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import styled from "styled-components";
import 'react-toastify/dist/ReactToastify.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';

import { clearCart, getTotals } from "~/features/slice/cartSlice";
import { create } from "~/features/api/orderAPI"
import CartItem from "./CartItem";
import { index, update } from "~/features/api/user/userDiscountAPI"
import AddressForm from "./AddressForm"

const Container = styled.div`
  background-color: #EEF2F6;
`

const ChildContainer = styled.div`
  padding: 24px 24px 0 24px;
`

const RowContainer = styled.div`
  border-radius: 18px;
  background-color: #fff;
  padding: 12px 24px;
`

const ColContainer = styled.div`
`
const Title = styled.div`
  font-size: 28px;
  font-weight: 650;
  text-align: center;
`

const ItemsDiv = styled.div`

`

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;

const SelectBox = styled.div`
  display: flex;
`

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

function Cart() {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const user = useSelector(state => state.auth.user)
  const selectorOrder = useSelector(state => state.cart);
  const [cart, setOrder] = useState(selectorOrder.cart)
  const [selectedOptions, setSelectedOptions] = useState(null);
  const [discounts, setDiscounts] = useState([])
  const [discountPrice, setDiscountPrice] = useState(0)

  const [address, setAddress] = useState(user.address);
  const [description, setDescription] = useState("");

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedOptions(event.target.value);
  };

  const handleClearSelection = (event) => {
    event.stopPropagation();
    setSelectedOptions(null);
    console.log(selectedOptions)
  };

  useEffect(() => {
    setOrder(selectorOrder.cart)
    dispatch(getTotals())
  }, [selectorOrder.cart, selectorOrder.amount, selectorOrder.fee]);

  useEffect(() => {
    index(user.id)
    .then(response => {
      setDiscounts(response.data)
    })
  }, [])

  useEffect(() => {
    if (selectedOptions && selectedOptions.discount) {
      if (selectedOptions.discount.kind === "percent") {
        setDiscountPrice(selectorOrder.total * selectedOptions.discount.value/100);
      } else {
        setDiscountPrice(parseInt(selectedOptions.discount.value));
      }
    }
  }, [selectedOptions])

  const handlePayment = () => {
    create(user.id, selectorOrder.total + selectorOrder.fee - discountPrice, cart, address, description)
      .then((response) => {
        dispatch(clearCart())
        const order = response.data
        update(user.id, selectedOptions.id, order.id)
        navigate("/")
        toast.success('Order Success!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
  }

  return (  
    <Container>
      <ChildContainer>
        <RowContainer>
          <Title>CART</Title>
        </RowContainer>
      </ChildContainer>
      <ChildContainer>
        <RowContainer>
        {
          cart.length > 0 ? (
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={4}>
                <Grid item xs={8}>
                {
                  cart.map((product, index) => {
                    return (
                      <CartItem key= {index} product={product}/>
                    )
                  })
                }
                </Grid>
                <Grid item xs={4}>
                  <RowContainer style={{backgroundColor: '#EEF2F6', marginTop: '24px'}}>
                    <Title>ORDER SUMMARY</Title>
                  </RowContainer>
                  <RowContainer style={{backgroundColor: '#EEF2F6', marginTop: '24px'}}>
                    <SummaryItem>
                      <SummaryItemText>Price</SummaryItemText>
                      <SummaryItemPrice>$ {selectorOrder.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                      <SummaryItemText>Phí giao hàng</SummaryItemText>
                      <SummaryItemPrice>$ {selectorOrder.fee}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                      <SummaryItemText>Khuyến mãi</SummaryItemText>
                      <SummaryItemPrice>$ {discountPrice}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem style={{ fontWeight: "200", fontSize: "24px" }}>
                      <SummaryItemText>Tổng thanh toán</SummaryItemText>
                      <SummaryItemPrice>$ {selectorOrder.total + selectorOrder.fee - discountPrice}</SummaryItemPrice>
                    </SummaryItem>
                  </RowContainer>
                  <RowContainer style={{backgroundColor: '#EEF2F6', marginTop: '24px'}}>
                    {/* <TextField
                      autoFocus
                      margin="dense"
                      label="Address"
                      fullWidth
                      value={address}
                      onChange={handleAddressChange}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      label="Description"
                      fullWidth
                      value={description}
                      onChange={handleDescriptionChange}
                    /> */}
                    <AddressForm/>
                  </RowContainer>
                  <RowContainer style={{backgroundColor: '#EEF2F6', marginTop: '24px'}}>
                    <FormControl variant="standard" sx={{ m: 1, width: 240, marginTop: 1, marginLeft: 0 }} >
                      <SelectBox>
                        <InputLabel id="demo-simple-select-standard-label">Select Discount</InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          style={{ width: 480 }}
                          value={selectedOptions?.discount.name}
                          onChange={handleChange}
                          label="Select Discount"
                        >
                        {
                          discounts.map((discount, index) => {
                            return <MenuItem value={discount} key={index}>{discount.discount.name}</MenuItem>
                          })
                        }
                        </Select>
                        <Button onClick={handleClearSelection} size="small" variant="outlined" sx={{ m: 0.5 }}>
                          <CloseIcon/>
                        </Button>
                      </SelectBox>
                    </FormControl>
                  </RowContainer>
                  <Button variant="contained" color="success" endIcon={<LocalMallOutlinedIcon />} onClick={handlePayment} style={{width: '100%', fontSize: '18px', borderRadius: '18px', textAlign:'center', marginTop: '24px', paddingTop: '12px', paddingBottom: '12px'}}>
                    Pay Now
                  </Button>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <h3>You don't have any order ! Shopping now !</h3>
          )
        }
        </RowContainer>
      </ChildContainer>
    </Container>
  );
}

export default Cart;