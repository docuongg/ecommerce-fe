import styled from "styled-components"
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Container = styled.div`
  width: 96px;
  display:flex;
  justify-content: space-between;
  border-radius: 24px;
  padding: 0 12px;
  float: right;
  &:hover {
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: rgba(223,225,229,0);
    background-color:#aaa;
  };
  background-color: #EDE7F6;
`

const ProfileIconDiv = styled.div`
  width: 36px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center; 
`

const LogoImg = styled.img`
  max-width: 100%; 
  max-height: 100%;
  position: absolute;
`

const IconDiv = styled.div`
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center; 
`

function ProfileBox() {
  return ( 
    <Container>
      <ProfileIconDiv>
        <LogoImg src="https://logodix.com/logo/1931274.png"/>
      </ProfileIconDiv>
      <IconDiv>
        <SettingsOutlinedIcon/>
      </IconDiv>
    </Container>
  );
}

export default ProfileBox;