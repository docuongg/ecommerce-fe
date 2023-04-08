import styled from "styled-components"
import LogoBox from "./LogoBox";
import SearchBox from "./SearchBox";
import ProfileBox from "./ProfileBox";

const Container = styled.div`
  padding: 24px;
  height: 10vh;
  display: flex;
  justify-content: space-between;
`
const ChildContainer = styled.div`
  display: flex;
  flex-grow: 1
`

function Header() {
  return ( 
    <Container>
      <ChildContainer>
        <LogoBox/>
        <SearchBox/>
      </ChildContainer>
      <ProfileBox/>
    </Container>
  );
}

export default Header;