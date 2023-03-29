import styled from "styled-components"
import { mobile } from "../responsive"
import Category from "./Category"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { index } from '../features/category/categoryAPI'
import { setCategories } from '../features/category/categorySlice'

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	${mobile({padding: '0'})}
`

export default function Categories() {
	const categories = useSelector(state => state.category.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    // Lấy danh sách category từ API
    index()
      .then(response => {
        // Lưu danh sách category vào state
        dispatch(setCategories(response.data));
      });
  }, []);

  return (
    <Container>
      {categories.map(category => (
        <Category key={category.id} category={category} />
      ))}
    </Container>
  )
}
