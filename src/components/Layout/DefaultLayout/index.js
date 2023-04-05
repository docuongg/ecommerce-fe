import { Navbar, Footer, Announcement, Newsletter } from '../components/user'

function DefaultLayout({ children }) {
  return ( 
    <div>
      <Announcement/>
      <Navbar/>
      <div className='container'>
        { children }
      </div>
      <Newsletter/>
      <Footer/>
    </div> 
  );
}

export default DefaultLayout;