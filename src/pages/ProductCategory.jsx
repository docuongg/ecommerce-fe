import styled from "styled-components";
import { Products } from "../components/Layout/components";
import { useParams } from "react-router-dom";
import { index } from "../features/api/productAPI"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setProductsByCategory } from "../features/slice/categorySlice";

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

export default function ProductCategory() {
  const { id } = useParams();

  const selectedCategory = useSelector(state => state.category.selectedCategory);
  const products = useSelector(state => state.category.productsByCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    index(id)
      .then(response => {
        dispatch(setProductsByCategory(response.data));
      })
    window.scrollTo(0, 0);
  }, [id, dispatch]);

  return (
    <>
      <Container>
        <Title>{selectedCategory.name}</Title>
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
        <Products products = {products}/>
      </Container>
    </>
  );
}
