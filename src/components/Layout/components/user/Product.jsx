import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { addProductToCart } from "~/features/slice/orderSlice"

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
  transition: all 0.3s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 300px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover {
    ${Info} {
      opacity: 1;
    }
    ${Image} {
      opacity: 0.5;
    }
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export default function Product({ item }) {
  const dispatch = useDispatch()
  
  const addToCart = (product) => {
    // let storedProducts = localStorage.getItem('items')
    // const products = JSON.parse(storedProducts) || [];
    product = { ...product, amount: 1}
    // products.push(item)
    // localStorage.setItem("items", JSON.stringify(products));
    dispatch(addProductToCart(product))
  }

  return (
    <Container>
      <Image src={item.thumbnail_url} />
      <Info>
        <Icon>
          <ShoppingCartOutlined onClick={() => addToCart(item)}/>
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
}