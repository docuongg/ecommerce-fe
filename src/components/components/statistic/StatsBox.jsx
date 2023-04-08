import styled from "styled-components"
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Container = styled.div`
  background-color: #673AB7;
  border-radius: 18px;
  padding: 18px 28px;
  color: #fff;
  display: flex;
  justify-content: space-between;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Title = styled.div`

`

const Stats = styled.div`
  font-size: 32px;
  font-weight: 800;
  flex: 1;
`

const Description = styled.p`

`

const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

function StatsBox() {
  return (  
    <Container>
      <Content>
        <Title>
          Revenue
        </Title>
        <Stats>
          50055$
        </Stats>
        <Description>
          42934$ Last Month
        </Description>
      </Content>
      <IconDiv>
        <MonetizationOnOutlinedIcon sx={{ fontSize: 108 }}/>
      </IconDiv>
    </Container>
  );
}

export default StatsBox;