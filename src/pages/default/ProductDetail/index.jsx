import styled from "styled-components"
import Rating from '@mui/material/Rating';
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { useDispatch } from "react-redux";
import { Carousel } from "@material-ui/core";

import { addProductToCart } from "~/features/slice/cartSlice"
import { show } from "~/features/api/productAPI"
import { useEffect, useState } from "react";

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
  display:flex;
`

const CategoryTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
`
const ProductDiv = styled.div`
  background-color: #fff;
  border-radius: 18px;
  padding: 18px;
  margin-bottom: 24px;
`

const NameText = styled.p`
  font-size: 30px;
  font-weight: 600;
`

const DescriptionText = styled.p`
  font-size: 20px;
  font-weight: 500;
  opacity: 0.8;
`

const RowChild = styled.div`
  display: flex;
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
  font-size: 30px;
  font-weight: 650;
  color: #2196F3;
`

const GroupDiv = styled.div`
  margin: 16px 0;
`

function ProductDetail() {
  
  const { id } = useParams();

  const [product, setProduct] = useState({})
  const [amount, setAmount] = useState(1)

  const dispatch = useDispatch()

  useEffect(() => {
    show(id)
      .then(response => {
        setProduct(response.data)
      })
  }, [])

  const handleIncrease = () => {
    setAmount(amount+1)
  }

  const handleDecrease = () => {
    if (amount > 1) {
      setAmount(amount-1)
    }
  }

  const addToCart = (product) => {
    product = { ...product, amount: amount}
    dispatch(addProductToCart(product))
  }

  return (  
    <Container>
      <ChildContainer>
        <RowContainer>
          <CategoryTitle>{product.name}</CategoryTitle>
        </RowContainer>
      </ChildContainer>
      <ChildContainer>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <ProductDiv className="row">
              <div className="col-4">
                <img src={`${product.thumbnail_url}`} />
              </div>
              <div className="col-8">
                <RowChildSpace>
                  <NameText>{product.name}</NameText>
                  <Button variant="outlined"><FavoriteBorderOutlinedIcon/></Button>
                </RowChildSpace>
                <DescriptionText className="text-truncate">{product.description}</DescriptionText>
                <RowChild>
                  <Rating name="half-rating" defaultValue={4.5} precision={0.5} size="small"/>
                  <VoteText>(1.99+)</VoteText>
                </RowChild>
                <PriceText>$ {product.price}</PriceText>
                <GroupDiv>
                  <ButtonGroup aria-label="large button group">
                    <Button key="one" onClick={handleDecrease}><RemoveOutlinedIcon/></Button>
                    <Button key="two">{amount}</Button>
                    <Button key="three" onClick={handleIncrease}><AddOutlinedIcon/></Button>
                  </ButtonGroup>
                </GroupDiv>
                <hr/>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" onClick={() => addToCart(product)} startIcon={<AddShoppingCartOutlinedIcon />} style={{width: '50%'}}>
                    Add To Cart
                  </Button>
                  <Button variant="contained" color="success" endIcon={<LocalMallOutlinedIcon />} style={{width: '50%'}}>
                    Buy Now
                  </Button>
                </Stack>
              </div>
            </ProductDiv>
            <div className="row">
              
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </ChildContainer>
    </Container>
  );
}

export default ProductDetail;