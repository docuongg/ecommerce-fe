import styled from "styled-components";
import Rating from '@mui/material/Rating';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { addProductToCart } from "~/features/slice/cartSlice"

const Container = styled.div`
  background-color: #fff;
  border-radius: 18px;
  margin-bottom: 16px;
`

const ImgDiv = styled.div`
  cursor: pointer;
  overflow: hidden;
  height: 300px;
  display: flex; 
  justify-content: center;
`

const ContentDiv = styled.div`
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
  font-size: 24px;
  font-weight: 650;
`

function Product( {item}) {

  const dispatch = useDispatch()
  
  const addToCart = (product) => {
    product = { ...product, amount: 1}
    dispatch(addProductToCart(product))
  }

  return (  
    <div className="col-2 px-2">
      <Container>
        <ImgDiv>
          <Link to = {`/products/${item.id}`}>
            <img src={`${item.avatar_url || item.thumbnail_url}`} style={{maxWidth: '100%', height: 'auto', borderRadius: "10px 10px 0 0"}}/>
          </Link>
        </ImgDiv>
        <ContentDiv>
          <NameText>{item.name}</NameText>
          <DescriptionText className="text-truncate">{item.description}</DescriptionText>
          <RowChild>
            <Rating name="half-rating" defaultValue={4.5} precision={0.5} size="small"/>
            <VoteText>(1.99+)</VoteText>
          </RowChild>
          <RowChildSpace>
            <PriceText>${item.price}</PriceText>
            <Button variant="contained" onClick={() => addToCart(item)}><AddShoppingCartOutlinedIcon /></Button>
          </RowChildSpace>
        </ContentDiv>
      </Container>
    </div>
  );
}

export default Product;
