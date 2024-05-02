import React from 'react';
import LoadingPizza from "./Images/LoadingPizza.png";

export const Loading = () => {
    return (
        <div className="loader-container h-screen flex justify-center items-center w-full bg-[#343434] text-center font-inter">
          <div>
            <h1 className='text-white text-[80px] font-black ml-20'>WCZYTYWANIE...</h1>
            <img src={LoadingPizza} alt="Loading pizza" className='w-[40%] mx-auto animate-spin-slow' />
          </div>
        </div>
      );
}
