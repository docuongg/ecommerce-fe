import { Add, Remove } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { carts } from "../data";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, addToCart, remove, decrease, increase, toggleAmount, loading, displayItems } from "../features/order/orderSlice";
import { display } from "@mui/system";
import { create } from "../features/order/orderAPI"

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "5px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background: ${(props) =>
    props.type === "filled" ? "lightgray" : "transparent"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
  padding-right: 20px;
  ${mobile({ padding: "0" })}
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 3;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ backgroundColor: "#f8d2d2", borderRadius: "5px" })}
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${mobile({ marginBottom: "5px" })}
`;

const ProductAmount = styled.div`
  font-size: 23px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ fontSize: "25px" })}
`;

const Summary = styled.div`
  flex: 1;
  height: 100%;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  ${mobile({ textAlign: "center" })}
`;

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  font-size: 20px;
`;

function CartItem({item}) {
  const [amount, setAmount] = useState(item.amount)
  const dispatch = useDispatch()

  const handleIncreaseAmount = (id) => {
    dispatch(increase(id))
    setAmount(amount+1)
  }

  const handleDecreaseAmount = (id) => {
    dispatch(decrease(id))
    setAmount(amount-1)
  }

  return (
    <Product>
      <ProductDetail>
        <Image src={item.thumbnail_url} />
        <Details>
          <ProductName>
            <b>Product: </b>{item.name}
          </ProductName>
          <ProductId>
            <b>ID: </b>{item.id}
          </ProductId>
          {/* <ProductColor color={item.color} />
          <ProductSize>
            <b>Size: </b>{item.size}
          </ProductSize> */}
        </Details>
      </ProductDetail>
      <PriceDetail>
        <ProductAmountContainer>
          <Remove style={{cursor: 'pointer'}} onClick={() => handleDecreaseAmount(item.id)} />
          <ProductAmount>{amount}</ProductAmount>
          <Add style={{cursor: 'pointer'}} onClick={() => handleIncreaseAmount(item.id)}/>
        </ProductAmountContainer>
        <ProductPrice>$ {item.price * amount}</ProductPrice>
      </PriceDetail>
    </Product>
  );
}

export default function Cart() {
  const dispatch = useDispatch();


  const userId = useSelector(state => state.auth.user.id)
  const selectorOrder = useSelector(state => state.order.cart);
  const [order, setOrder] = useState(selectorOrder)

  useEffect(() => {
    setOrder(selectorOrder)
  }, [selectorOrder]);

  const handlePayment = () => {
    create(userId, order)
      .then((response) => {
        console.log(response.data)
      })
  }

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>MY CART</Title>
          <Top>
            <Link>
              <TopButton onClick={() => dispatch(clearCart())}>Lam moi gio hang</TopButton>
            </Link>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
              <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">Thanh toán</TopButton>
          </Top>
          <Bottom>
            <Info>
              {order.map((item, index) => (
                <CartItem key={index} item={item} />
              ))}
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Giá tiền</SummaryItemText>
                <SummaryItemPrice>$ 500</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Phí giao hàng</SummaryItemText>
                <SummaryItemPrice>$ 10</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Khuyến mãi</SummaryItemText>
                <SummaryItemPrice>$ -25</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem style={{ fontWeight: "200", fontSize: "28px" }}>
                <SummaryItemText>Tổng thanh toán</SummaryItemText>
                <SummaryItemPrice>$ 465</SummaryItemPrice>
              </SummaryItem>
              <SummaryButton onClick={handlePayment}>Thanh toán ngay</SummaryButton>
            </Summary>
          </Bottom>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
}
