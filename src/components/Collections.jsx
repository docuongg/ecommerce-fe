import styled from "styled-components"
import { categories } from '../data'
import { mobile } from "../responsive"
import CategoryItem from "./CategoryItem"

const Container = styled.div`
	display: flex;
	padding: 20px;
	justify-content: space-between;
	${mobile({flexDirection: 'column', padding: '0'})}
`

export default function Collections() {
  return (
	<Container>
		{categories.map(item => (
			<CategoryItem item={item} key={item.id} />
		))}
	</Container>
  )
}
