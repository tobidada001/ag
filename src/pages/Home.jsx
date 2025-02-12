import React, { useState, useEffect } from 'react';
import HomePageCategorySection from '../components/HomePageCategorySection';
import FeaturedCrops from '../components/FeaturedCrops';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import { Link, useNavigate } from 'react-router-dom';
import bgimage from '../assets/images/countryside-woman-holding-plant-leaves.jpg';
import LoadingSpinner from '../components/LoadingSpinner';
import FlashSales from '../components/FlashSales';
import BestSellingProducts from '../components/BestSellingProducts';
import SponsoredProducts from '../components/SponsoredProducts';
import HomeCarouselCategories from '../components/HomeCarouselCategories';
import BannerCarousel from '../components/BannerCarousel';

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const navigator = useNavigate()

  const handleUserType = (e) =>{
    localStorage.setItem('usertype', e.target.id)
    navigator('/dashboard')
  }

  useEffect(() => {
    // Create an image object to check if the background image has loaded
    const img = new Image();
    img.src = bgimage;
    img.onload = () => {
      setImageLoaded(true); // Set the state to true once the image has loaded
    };
  }, []);


  const setAccountType = (e) => {
    localStorage.setItem('usertype', e.target.value)
    console.log('User type: ', e.target.value)
    
  }

  return (
    <>
    <div className='flex md:flex-row flex-col container'>
          <span>
          <input type='radio' name='usertype' id='buyer' value={'buyer'} onClick={setAccountType}/> Buyer
          </span>

          <span>
          <input type='radio' name='usertype' id='farmer' value={'farmer'} onClick={setAccountType} /> Farmer
          </span>
          <Link to={'/dashboard'} className='py-1 px-2 rounded-md bg-green-600 text-white'>Go to Dashboard</Link>

      </div>


      <div className='flex md:mx-6 lg:mx-20 mt-5'>

        

        <HomeCarouselCategories />

        <BannerCarousel />
      </div>

      
      <div className='mx-2 sm:mx-5 md:mx-10 lg:mx-20'>
        <FlashSales />

        <SponsoredProducts />

        <HomePageCategorySection />

        <BestSellingProducts />

        <FeaturedCrops />

      </div>
      

      <HowItWorks />
      <Testimonials />

      <div className="bg-yellow-100 sm:px-3 px-1 lg:px-72 py-10 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-semibold text-center">
          Are you ready to bring your farm produce to more consumers?
        </h2>
        <Link to={'/register'} className="bg-green-800 text-white border-2 hover:text-green-800 hover:border-green-800 rounded-lg hover:bg-transparent font-semibold px-6 py-4 mt-10">
          Register as a Farmer
        </Link>
      </div>
    </>
  );
};

export default Home;
