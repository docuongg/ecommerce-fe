import styled from "styled-components"
import { useParams } from "react-router-dom";
import { index } from "~/features/api/productAPI"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Product from "../ProductCategory/Product";

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

function Search() {

  const products = useSelector(state => state.product.products)

  return (  
    <Container>
      <ChildContainer>
        <RowContainer>
          <CategoryTitle>Tim Kiem</CategoryTitle>
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

export default Search;