import { Clear } from "@mui/icons-material"
import { useState } from "react"
import styled from "styled-components"
import { mobile } from "../../../responsive"

const Content = styled.div`
	height: 40px;
	background: teal;
	color: white;
	display: ${props => (props.anno ? 'flex' : 'none')};
	align-items: center;
	justify-content: center;
	font-size: 16px;
	font-weight: 500;
	position: sticky;
	top: 0;
	z-index: 999;
	${mobile({display: 'none'})}
`

const Icon = styled.div`
	position: absolute;
	right: 10px;
	opacity: 0.7;
	transition: all .5s ease;
	cursor: pointer;
	&:hover {
		opacity: 1;
	}
`

export default function Announcement() {
	const [anno, setAnno] = useState(true)

	const handleAnno = () => {
		setAnno(!anno)
	}

  return (
	<Content anno={anno}>
		{'Siêu sale chính hãng 100%, đặt hàng ngay !'}
		<Icon onClick={handleAnno}><Clear style={{fontSize: '30px'}}/></Icon>
	</Content>
  )
}
