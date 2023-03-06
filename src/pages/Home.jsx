import React from 'react'
import Announcement from '../components/Announcement'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Categories from '../components/Categories'
import Slider from '../components/Slider'

export default function Home() {
  return (
	<div>
		<Announcement />
		<Navbar />
		<Slider />
		<Collections />
		<Categories />
		<Newsletter />
		<Footer />
	</div>
  )
}
