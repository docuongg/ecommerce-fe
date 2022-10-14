import styled from "styled-components"

const Content = styled.div`
	height: 30px;
	background: teal;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: 500;
`

export default function Announcement() {
  return (
	<Content>
		{'Siêu sale chính hãng 100%. Đăng nhập lazada ngay :))'}
	</Content>
  )
}
