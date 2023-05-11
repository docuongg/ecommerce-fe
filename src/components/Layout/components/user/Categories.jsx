import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import React from 'react';
import Category from "./Category"
import { index } from '~/features/api/categoryAPI'
import { mobile } from "~/responsive"
import { setCategories } from '~/features/slice/categorySlice'
import Carousel from 'nuka-carousel';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';

const Container = styled.div`
  margin: 48px  0;
`

const TitleText = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 36px;
  color: #111
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
      <TitleText>
        <p style={{marginBottom: "-6px"}}>DANH MỤC MÓN ĂN</p>
        <hr style={{height: "2px", backgroundColor: "#aaa", margin: "6px 720px 48px 720px"}}/>
      </TitleText>
      <Carousel slidesToShow={4} autoplay={true} wrapAround={true} renderBottomCenterControls={() => null}>
        {categories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </Carousel>
    </Container>
  )
}
