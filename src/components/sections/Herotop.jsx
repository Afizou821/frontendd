import React from 'react';
import Sac from '../../medias/images/p2.jpg';
import ScrollText from './ScrollText';

export default function Herotop() {
  return (
    <div className='bg-gray-200 relative h-96 w-full items-center flex justify-center object-contains'>
      <img src={Sac} className='h-full w-full object-cover  absolute z-0' alt="Sac" style={{ filter: 'brightness(70%)' }} />
      <div className="z-10 flex flex-col items-center justify-center px-48">
        <h1 className='md:text-4xl font-extrabold leading-tight'>New arrivals are here</h1>
        <p className='md:text-2xl font-normal leading-tight mt-2'>
          The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock.
        </p>
        <button className='px-8 py-5 my-5 bg-black rounded-md text-white hover:bg-gray-100 hover:text-black'>
          Shop new Arrivals
        </button>
      </div>
      
    </div>
  );
}
