import React from 'react';
import HomePageCategorySection from '../components/HomePageCategorySection';
import FeaturedCrops from '../components/FeaturedCrops';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';

const Home = () => (

    <>
    <div className="relative bg-green-600 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-cover opacity-70" style={{ backgroundImage: "url('/assets/images/countryside-woman-holding-plant-leaves.jpg')" }}></div>
      <div className="relative z-10 px-6 sm:px-12 lg:px-20 py-28 text-center lg:text-left max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Fresh Farm Produce, Delivered to Your Doorstep
          </h1>
          <p className="text-lg text-white/90">
            Buy crops directly from Nigerian farmers at the best prices. Support local agriculture and enjoy farm-fresh quality.
          </p>
          <div className="mt-6 flex flex-col md:flex-row justify-center lg:justify-start gap-4">
            <button className="bg-yellow-400 text-green-800 hover:bg-yellow-500 px-6 py-3 rounded-lg text-lg font-medium">
              Explore Products
            </button>
            <button className="bg-transparent border border-yellow-400 hover:border-yellow-500 hover:bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-medium">
              Register as a Farmer
            </button>
          </div>
        </div>

   
      </div>
    </div>




    <HomePageCategorySection />


    <FeaturedCrops />


    <HowItWorks />

    <Testimonials />


    <div className='bg-yellow-100 h-52 flex flex-col justify-center items-center'>

        <h2 className="text-4xl font-semibold">Are you ready to bring your farm produce to more consumers?</h2>

        <Link className='bg-green-800 text-white border-2 hover:text-green-800 hover:border-green-800 rounded-lg hover:bg-transparent font-semibold  px-6 py-4 mt-10'>Register as a Farmer</Link>

    </div>

  </>
);

export default Home;
