import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  background-color: #d2d2d2;
  ${mobile({flexDirection: 'column'})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobile({alignItems: 'center'})}
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.5s ease;
  color: #${(props) => props.color};
  background-color: #fff;
  border: 2px solid #${(props) => props.color};
  &:hover {
    color: #fff;
    background-color: #${(props) => props.color};
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
  ${mobile({textAlign: 'center'})}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  letter-spacing: 0.1rem;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>BILUXURY</Logo>
        <Desc>
          Thời trang cao cấp ✓ <br/>
          Chất liệu vải cao cấp thân thiện môi trường ✓ <br/>
          10 năm phát triển & cống hiến xã hội ✓ <br/>
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Tham khảo</Title>
        <List>
          <ListItem>Trang chủ</ListItem>
          <ListItem>Giỏ hàng</ListItem>
          <ListItem>Thời trang nam</ListItem>
          <ListItem>Thời trang nữ</ListItem>
          <ListItem>Phụ kiện</ListItem>
          <ListItem>Tài khoản</ListItem>
          <ListItem>Theo dõi đơn</ListItem>
          <ListItem>Yêu thích</ListItem>
          <ListItem>Điều khoản</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Liên hệ</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Hồ Gươm Plaza, 102 Trần Phú
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          038 333 8589
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          tuandung13401@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
}
