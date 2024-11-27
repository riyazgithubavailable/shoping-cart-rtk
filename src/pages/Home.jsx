import React from 'react'
import Products from '../components/Products'
import Navbaar from '../components/Navbaar'

const Home = () => {
  return (
    <div>
      <Navbaar />
      <h2 className='heading'>Welcome to the Riyaz all in one store</h2>
      <section>
        <h3 className='heading'>Products</h3>
        <Products />
      </section>
    </div>
  )
}

export default Home
