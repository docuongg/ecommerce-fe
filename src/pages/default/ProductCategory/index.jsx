import styled from "styled-components"
import { useParams } from "react-router-dom";
import { index } from "~/features/api/productAPI"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setProductsByCategory } from "~/features/slice/categorySlice";
import Button from '@mui/material/Button';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
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
  justify-content: space-between;
`

const CategoryTitle = styled.div`
  font-size: 28px;
  font-weight: 650;
`

function ProductCategory() {

  const { id } = useParams();

  const selectedCategory = useSelector(state => state.category.selectedCategory);

  const [products, setProducts] = useState([]);

  const p = useSelector(state => state.category.productsByCategory);

  useEffect(() => {
    setProducts(p);
  }, [p]);

  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(true)

  const up = () => {
    setProducts(prevProducts => [...prevProducts].sort((a, b) => a.price - b.price));
    setToggle(true)
  }

  const down = () => {
    setProducts(prevProducts => [...prevProducts].sort((a, b) => b.price - a.price));
    setToggle(false)
  }
  
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
          <div>
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

export default ProductCategory;