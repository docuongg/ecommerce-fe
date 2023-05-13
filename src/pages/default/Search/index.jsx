import styled from "styled-components"
import { useParams } from "react-router-dom";
import { index } from "~/features/api/productAPI"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

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
  justify-content: space-between;
`

const CategoryTitle = styled.div`
  font-size: 28px;
  font-weight: 650;
`

function Search() {

  const [products, setProducts] = useState([]);

  const p = useSelector(state => state.product.products);

  useEffect(() => {
    setProducts(p);
  }, [p]);

  const [toggle, setToggle] = useState(true)

  const up = () => {
    setProducts(prevProducts => [...prevProducts].sort((a, b) => a.price - b.price));
    setToggle(true)
  }

  const down = () => {
    setProducts(prevProducts => [...prevProducts].sort((a, b) => b.price - a.price));
    setToggle(false)
  }

  return (  
    <Container>
      <ChildContainer>
        <RowContainer>
          <CategoryTitle>Tìm Kiếm</CategoryTitle>
          <div>
            Sắp xếp :
            <Button variant="contained" onClick={up} color={ toggle ? "primary" : "grey"}><ArrowUpwardOutlinedIcon /></Button>
            <Button variant="contained" onClick={down} color={ toggle ? "grey" : "primary"} style={{marginLeft: '6px'}}><ArrowDownwardOutlinedIcon /></Button>
          </div>
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