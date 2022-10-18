import { Add, Remove } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div`
`;

const Wrapper = styled.div`
  padding: 20px;
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
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background: ${(props) => (props.type === "filled" ? "lightgray" : "transparent")};
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
`;

const Info = styled.div`
  flex: 3;
  padding-right: 20px;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
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
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 23px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
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

export default function Cart() {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>GIỎ HÀNG</Title>
          <Top>
            <Link to='/productlist'><TopButton>Tiếp tục mua sắm</TopButton></Link>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
              <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">Thanh toán</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                  <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                  <Details>
                    <ProductName>
                      <b>Product: </b>Philz T-Shirt
                    </ProductName>
                    <ProductId>
                      <b>ID: </b>123987456
                    </ProductId>
                    <ProductColor color="gray" />
                    <ProductSize>
                      <b>Size: </b>M
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove />
                    <ProductAmount>2</ProductAmount>
                    <Add />
                  </ProductAmountContainer>
                  <ProductPrice>$ 30</ProductPrice>
                </PriceDetail>
              </Product>
              <hr />
              <Product>
                <ProductDetail>
                  <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                  <Details>
                    <ProductName>
                      <b>Product: </b>JESSIE THUNDER SHOES
                    </ProductName>
                    <ProductId>
                      <b>ID: </b>123987456
                    </ProductId>
                    <ProductColor color="#25252a" />
                    <ProductSize>
                      <b>Size: </b>38
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove />
                    <ProductAmount>1</ProductAmount>
                    <Add />
                  </ProductAmountContainer>
                  <ProductPrice>$ 50</ProductPrice>
                </PriceDetail>
              </Product>
              <hr />
              <Product>
                <ProductDetail>
                  <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                  <Details>
                    <ProductName>
                      <b>Product: </b>JESSIE THUNDER SHOES
                    </ProductName>
                    <ProductId>
                      <b>ID: </b>123987456
                    </ProductId>
                    <ProductColor color="#25252a" />
                    <ProductSize>
                      <b>Size: </b>38
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove />
                    <ProductAmount>1</ProductAmount>
                    <Add />
                  </ProductAmountContainer>
                  <ProductPrice>$ 50</ProductPrice>
                </PriceDetail>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Giá tiền</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Phí giao hàng</SummaryItemText>
                <SummaryItemPrice>$ 5</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Khuyến mãi</SummaryItemText>
                <SummaryItemPrice>$ -15</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem style={{ fontWeight: "200", fontSize: "28px" }}>
                <SummaryItemText>Tổng thanh toán</SummaryItemText>
                <SummaryItemPrice>$ 70</SummaryItemPrice>
              </SummaryItem>
              <SummaryButton>Thanh toán ngay</SummaryButton>
            </Summary>
          </Bottom>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
}
