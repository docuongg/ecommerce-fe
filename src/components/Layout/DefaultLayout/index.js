import { Footer, Announcement, Newsletter } from '../components/user'
import { Header } from '../components'
import styled from "styled-components"

const ChildContainer = styled.div`
  background-color: #FFFFFF;
`

function DefaultLayout({ children }) {
  return ( 
    <div>
      <Announcement/>
      <Header/>
      <ChildContainer>
        { children }
      </ChildContainer>
      <Newsletter/>
      <Footer/>
    </div> 
  )
}

export default DefaultLayout;