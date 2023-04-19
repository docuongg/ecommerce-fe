import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import React from 'react';
import Category from "./Category"
import { index } from '~/features/api/categoryAPI'
import { mobile } from "~/responsive"
import { setCategories } from '~/features/slice/categorySlice'
import Carousel from 'nuka-carousel';

const Container = styled.div`
  margin: 48px  0;
`

export default function Categories() {
	const categories = useSelector(state => state.category.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    // Lấy danh sách category từ API
    index()
      .then(response => {
        console.log(response.data)
        // Lưu danh sách category vào state
        dispatch(setCategories(response.data));
      });
  }, []);

  return (
    <Container>
      <Carousel slidesToShow={4} autoplay={true} wrapAround={true} renderBottomCenterControls={() => null}>
        {categories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </Carousel>
    </Container>
  )
}
