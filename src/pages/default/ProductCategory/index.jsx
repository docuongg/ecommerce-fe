import styled from "styled-components"
import { useParams } from "react-router-dom";
import { index } from "~/features/api/productAPI"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setProductsByCategory } from "~/features/slice/categorySlice";

import Product from "./Product";

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
  font-weight: 650;
`

function ProductCategory() {

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
    <Container>
      <ChildContainer>
        <RowContainer>
          <CategoryTitle>{selectedCategory.name}</CategoryTitle>
        </RowContainer>
      </ChildContainer>
      <ChildContainer>
        <div className="row">
        {
          products.map((product, index) => {
            return (
              <Product key={index} item={product} />
            )
          })
        }
        </div>
      </ChildContainer>
    </Container>
  );
}

export default ProductCategory;