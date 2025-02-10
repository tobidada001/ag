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
import Showcase from '../components/ShowCase';

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
    
  }

  return (
    <>

      <div className='flex md:mx-6 lg:mx-20 mt-5'>
      <Showcase />

     
    <section className={`relative flex-1 bg-green-500 text-white py-20 `}  style={{ backgroundImage: `url(${bgimage})`, backgroundSize: "cover" }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fresh from Farm to Table</h1>
          <p className="text-xl mb-6">Discover the best agricultural products for your needs</p>
          {/* <button className="bg-white text-green-500 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
            Shop Now
          </button> */}
          <button onClick={handleUserType} id='buyer' className="bg-white text-green-500 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
            Buyer
          </button>
          <button onClick={handleUserType} id='farmer' className="bg-white text-green-500 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
            Farmer
          </button>
        </div>
        {/* <div className="md:w-1/2">
          <img src={bgimage} alt="Hero Image" className="rounded-lg shadow-lg" />
        </div> */}
      </div>
    </section>
  



</div>




{/* 

      {!imageLoaded ? <LoadingSpinner />: (
        <div className="relative bg-green-600 text-white">
          
          <div
            className="absolute inset-0 bg-cover opacity-70"
            style={{ backgroundImage: `url(${bgimage})` }}
          ></div>
          <div className="relative z-10 px-6 sm:px-12 lg:px-20 py-28 text-center lg:text-left max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
           
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Fresh Farm Produce, Delivered to Your Doorstep
              </h1>
              <p className="text-lg text-white/90">
                Buy crops directly from Nigerian farmers at the best prices. Support local agriculture and enjoy farm-fresh quality.
              </p>

              <select className='bg-green-500 text-white' onChange={setAccountType}>
                <option value={'buyer'}>Buyer Account</option>
                <option value={'farmer'}>Farmer Account</option>
              </select>
             
              <div className="mt-6 flex flex-col md:flex-row justify-center lg:justify-start gap-4">
                <Link
                  to={'/dashboard'} 
                  className="bg-yellow-400 text-green-800 hover:bg-yellow-500 px-6 py-3 rounded-lg text-lg font-medium"
                >
                  
                  Create an Account
                </Link>

                <Link
                  to={'/dashboard'} 
                  className="bg-transparent border border-yellow-400 hover:border-yellow-500 hover:bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-medium"
                >
                
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      )} */}

      
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
