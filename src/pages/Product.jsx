import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;

const Wreapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-size: 40px;
  font-weight: 100;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: 1px solid teal;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: 2px solid teal;
  background: #fff;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.5s ease;
  &:hover {
    color: teal;
  }
`;

export default function Product() {
  return (
    <>
      <Navbar />
      <Container>
        <Wreapper>
          <ImgContainer>
            <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>Denim Jumpsuit</Title>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
              voluptates soluta tempora voluptatem accusantium rerum fuga
              delectus at iure. Nulla, eos consequuntur hic repellendus deserunt
              accusantium veniam expedita in modi!
            </Desc>
            <Price>$20</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Màu sắc</FilterTitle>
                <FilterColor color="gray" />
                <FilterColor color="pink" />
                <FilterColor color="aqua" />
              </Filter>
              <Filter>
                <FilterTitle>Kích cỡ</FilterTitle>
                <FilterSize>
                  <FilterOption>XS</FilterOption>
                  <FilterOption>S</FilterOption>
                  <FilterOption>M</FilterOption>
                  <FilterOption>L</FilterOption>
                  <FilterOption>XL</FilterOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
              </AmountContainer>
              <Button>Thêm vào giỏ hàng</Button>
            </AddContainer>
          </InfoContainer>
        </Wreapper>
      </Container>
      <Footer />
    </>
  );
}
