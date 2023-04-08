import { Footer, Announcement, Newsletter } from '../components/user'
import { Header } from '../components'

function DefaultLayout({ children }) {
  return ( 
    <div>
      <Announcement/>
      <Header/>
      { children }
      <Newsletter/>
      <Footer/>
    </div> 
  )
}

export default DefaultLayout;