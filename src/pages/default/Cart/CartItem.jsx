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

const Container = styled.div`

`

const ImgDiv = styled.div`
  padding: 24px;
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

`

const GroupDiv = styled.div`
  
`

function CartItem( {product} ) {

  const [amount, setAmount] = useState(1)

  const handleIncrease = () => {
    setAmount(amount+1)
  }

  const handleDecrease = () => {
    if (amount > 1) {
      setAmount(amount-1)
    }
  }

  return (  
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2}>
            <ImgDiv>
              <img src={product.thumbnail_url} style={{width: '100px'}} />
            </ImgDiv>
          </Grid>
          <Grid item xs={10}>
            <ContentDiv>
              <NameText>{product.name}</NameText>
              
              <RowChildSpace>
                <DescriptionText>{product.description}</DescriptionText>
                <GroupDiv>
                  <ButtonGroup size="small" aria-label="large button group">
                    <Button key="one" onClick={handleDecrease}><RemoveOutlinedIcon/></Button>
                    <Button key="two">{amount}</Button>
                    <Button key="three" onClick={handleIncrease}><AddOutlinedIcon/></Button>
                  </ButtonGroup>
                </GroupDiv>
              </RowChildSpace>
              <RowChildSpace>
                <PriceText>$ {product.price}</PriceText>
                <TotalPriceText></TotalPriceText>
              </RowChildSpace>
            </ContentDiv>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default CartItem;