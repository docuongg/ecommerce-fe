import styled from "styled-components";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearCart, addToCart, remove, decrease, increase, toggleAmount, loading, displayItems, getTotals } from "~/features/slice/cartSlice";

const Container = styled.div`

`

const ImgDiv = styled.div`
  padding: 24px;
  display: flex; 
  justify-content: center;
  align-items: center;
`

const ContentDiv = styled.div`
  margin-top: 12px;
  padding: 16px 12px;
`

const NameText = styled.p`
  font-size: 18px;
  font-weight: 600;
`

const DescriptionText = styled.p`
  font-size: 16px;
  font-weight: 500;
`

const RowChildSpace = styled.div`
  display: flex;
  justify-content: space-between;
`

const VoteText = styled.p`
  font-size: 12px;
  margin-left: 12px;
`

const PriceText = styled.div`
  font-size: 24px;
  font-weight: 650;
`

const TotalPriceText = styled.div`
  font-size: 24px;
  font-weight: 650;
`

const GroupDiv = styled.div`
  
`

function CartItem( {product} ) {

  const dispatch = useDispatch()

  const handleIncreaseAmount = (id) => {
    dispatch(increase(id))
  }

  const handleDecreaseAmount = (id) => {
    dispatch(decrease(id))
  }

  return (  
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2}>
            <ImgDiv>
              <img src={product.avatar_url || product.thumbnail_url} style={{width: '100px'}} />
            </ImgDiv>
          </Grid>
          <Grid item xs={10}>
            <ContentDiv>
              <NameText>{product.name}</NameText>
              
              <RowChildSpace>
                <DescriptionText>{product.description}</DescriptionText>
                <GroupDiv>
                  <ButtonGroup size="small" aria-label="large button group">
                    <Button key="one" onClick={() => handleDecreaseAmount(product.id)}><RemoveOutlinedIcon/></Button>
                    <Button key="two">{product.amount}</Button>
                    <Button key="three" onClick={() => handleIncreaseAmount(product.id)}><AddOutlinedIcon/></Button>
                  </ButtonGroup>
                </GroupDiv>
              </RowChildSpace>
              <RowChildSpace>
                <PriceText>$ {product.price}</PriceText>
                <TotalPriceText>$ {product.price * product.amount}</TotalPriceText>
              </RowChildSpace>
            </ContentDiv>
            <hr/>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default CartItem;