import styled from "styled-components"

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const HeaderText = styled.div`

`

function FinancialReport() {

  return (  
    <Header>
      <HeaderText>
        <p>Cửa hàng KFC</p>
      </HeaderText>
      <HeaderText>
        <p>Cộng hòa xã hội chủ nghĩa Việt Nam</p>
        <p>Doc lap - Tu do - Hanh phuc</p>
      </HeaderText>
    </Header>
  );
}

export default FinancialReport;