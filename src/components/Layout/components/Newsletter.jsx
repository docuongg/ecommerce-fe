import { Send } from '@mui/icons-material'
import styled from 'styled-components'

import { mobile } from '../../../responsive'

const Container = styled.div`
	height: 60vh;
	background-color: #fcf5f5;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	${mobile({height: '30vh'})}
`

const Title = styled.h1`
	font-size: 70px;
	margin-bottom: 20px;
	${mobile({fontSize: '35px', marginBottom: '10px'})}
`

const Desc = styled.div`
	font-size: 25px;
	font-weight: 300;
	margin-bottom: 20px;
	${mobile({fontSize: '20px', marginBottom: '20px', textAlign: 'center'})}
`
const InputContainer = styled.div`
	width: 50%;
	height: 40px;
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	/* align-items: center; */
	border: 1px solid lightgray;
	${mobile({width: '70%'})}
`

const Input = styled.input`
	border: none;
	/* outline: none; */
	flex: 8;
	padding: 0;
	padding-left: 25px;
	${mobile({paddingLeft: '15px', flex: '5'})}
`

const Button = styled.button`
	flex: 1;
	background: teal;
	color: #fff;
	border: none;
	cursor: pointer;
	&:hover {
		opacity: .8;
	}
`


export default function Newsletter() {
  return (
	<Container>
		<Title>BẢN TIN</Title>
		<Desc>Nhận thông báo cho các sản phẩm yêu thích của bạn.</Desc>
		<InputContainer>
			<Input placeholder='Nhập email của bạn' />
			<Button>
				<Send />
			</Button>
		</InputContainer>
	</Container>
  )
}
