import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import { useProSidebar } from 'react-pro-sidebar';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 240px;
  position: relative;
`

const LogoDiv = styled.div`
  width: 150px;
`

const LogoImg = styled.img`
  max-width: 100%; 
  max-height: 100%;
  position: absolute;
`

const IconDiv = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center; 
  border-radius: 6px;
  margin: auto 24px auto 0;
  &:hover {
		box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: rgba(223,225,229,0);
    background-color:#aaa;
	};
  background-color: #EDE7F6;
  cursor: pointer
`

function LogoBox() {
  const { collapseSidebar } = useProSidebar();

  return (
    <Container>
      <LogoDiv>
        <LogoImg src="https://logodix.com/logo/1931325.png"/> 
      </LogoDiv>
      <IconDiv>
        <MenuIcon onClick={() => collapseSidebar()}/>
      </IconDiv>
    </Container>
  );
}

export default LogoBox;