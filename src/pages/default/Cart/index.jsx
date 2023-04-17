import styled from "styled-components";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
`

const ItemsDiv = styled.div`

`

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
      })
  }

  return (  
    <Container>
      <ChildContainer>
        <RowContainer>
          <Title>My Cart</Title>
        </RowContainer>
      </ChildContainer>
      <ChildContainer>
        <RowContainer>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
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
                <p>haha</p>
              </Grid>
            </Grid>
          </Box>
        </RowContainer>
      </ChildContainer>
    </Container>
  );
}

export default Cart;