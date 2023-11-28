import React from 'react'
import Cards from '../../components/Cards'
import BasketSideBar from '../../components/BasketSideBar'
import WishlistSideBar from '../../components/WishlistSideBar'
import Buttons from '../../components/Buttons'
import Navbar from '../../layout/Navbar'

const Home = () => {
  return (
    <>
    {/* <Navbar/>   */}
    <Buttons/>
    <BasketSideBar/>
    <WishlistSideBar/>
    <Cards/>
    </>
  )
}

export default Home