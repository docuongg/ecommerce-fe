import { ArrowDropUp, ArrowUpward } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;

const FilterText = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 7px 10px;
  margin-right: 20px;
  /* font-size: 20px; */
`;

const Option = styled.option``;

export default function ProductList() {
  return (
    <>
      <Navbar />
      <Container>
        <Title>Áo</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Lọc sản phẩm: </FilterText>
            <Select>
              <Option disabled selected>
                Màu sắc
              </Option>
              <Option>Trắng</Option>
              <Option>Đen</Option>
              <Option>Đỏ</Option>
              <Option>Xanh</Option>
              <Option>Tím</Option>
              <Option>Vàng</Option>
            </Select>
            <Select>
              <Option disabled selected>
                Kích cỡ
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sắp xếp: </FilterText>
            <Select>
              <Option disabled selected>
                Mới nhất
              </Option>
              <Option>Giá giảm </Option>
              <Option>Giá tăng </Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
      </Container>
      <Footer />
    </>
  );
}
