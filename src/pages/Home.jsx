import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'
import NewsLetter from '../components/NewsLetter'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Categories />
            <BestSeller />
            <BottomBanner />
            <NewsLetter />
        </>
    )
}

export default Home
