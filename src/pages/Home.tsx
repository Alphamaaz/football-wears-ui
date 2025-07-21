import React from 'react'
import Hero from '../components/Hero'
import Products from '../components/Products'
import WhyUs from '../components/WhyUs';

const Home:React.FC = () => {
  return (
    <>
      <Hero />
      <Products />
      <WhyUs/>
      
    </>
  );
}

export default Home