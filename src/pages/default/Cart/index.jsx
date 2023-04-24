import React from 'react';
import { ToastContainer, toast } from 'react-toastify';import styled from "styled-components";
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

import { clearCart, addToCart, remove, decrease, increase, toggleAmount, loading, displayItems, getTotals } from "~/features/slice/cartSlice";
import { create } from "~/features/api/orderAPI"
import CartItem from "./CartItem";

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

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

function Cart() {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const userId = useSelector(state => state.auth.user.id)
  const selectorOrder = useSelector(state => state.cart);
  const [cart, setOrder] = useState(selectorOrder.cart)

  useEffect(() => {
    setOrder(selectorOrder.cart)
    dispatch(getTotals())
  }, [selectorOrder.cart, selectorOrder.amount]);

  const handlePayment = () => {
    create(userId, selectorOrder.total, cart)
      .then((response) => {
        dispatch(clearCart())
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
                      <SummaryItemPrice>$ 10</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                      <SummaryItemText>Khuyến mãi</SummaryItemText>
                      <SummaryItemPrice>$ -25</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem style={{ fontWeight: "200", fontSize: "24px" }}>
                      <SummaryItemText>Tổng thanh toán</SummaryItemText>
                      <SummaryItemPrice>$ {selectorOrder.total + 10 - 25}</SummaryItemPrice>
                    </SummaryItem>
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