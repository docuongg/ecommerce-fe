import styled from "styled-components"

import { mobile } from "../../../responsive"
import Product from "./Product"

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	${mobile({padding: '0'})}
`

export default function Products( {products} ) {
  return (
	<Container>
		{products.map(item => (
			<Product key={item.id} item={item} />
		))}
	</Container>
  )
}