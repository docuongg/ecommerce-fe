import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

import Category from "./Category"
import { index } from '../../../features/api/categoryAPI'
import { mobile } from "../../../responsive"
import { setCategories } from '../../../features/slice/categorySlice'

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
