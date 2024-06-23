import React from 'react'
import Section from './Section'
import Navbar from './Navbar'
import Features from './Features'
import Categories from './Categories'
import Offer from './Offer'
import ProductsOne from './ProductsOne'
import Subscribe from './Subscribe'
import ProductsTwo from './ProductsTwo'
import Vendor from './Vendor'
import Footer from './Footer'
import Back from './Back'
import Shopdetails from './Shopdetails'


const Home = () => {
  return (
    <>
      <Section/>
      <Navbar />
      <Features/>
      <Categories/>
      <Offer/>
      <ProductsOne/>
      <Subscribe/>
      <ProductsTwo/>
      <Vendor/>
      <Footer/>
      <Back/>
      {/* <Shopdetails/> */}
 
    </>
  )
}

export default Home
