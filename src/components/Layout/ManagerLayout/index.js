import styled from "styled-components"
import SideBar from "./SideBar";
import Header from "./Header";

const ParentContainer = styled.div`
  display: flex;
`

const ChildContainer = styled.div`
  flex: 1;
  background-color: #EEF2F6;
  border-radius: 16px;
  margin-right: 30px;
`

function ManagerLayout({ children }) {
  return (
    <div>
      <Header/>
      <ParentContainer className="d-flex">
        <SideBar/>
        <ChildContainer>
          { children }
        </ChildContainer>
      </ParentContainer>
    </div>
  )
}

export default ManagerLayout;