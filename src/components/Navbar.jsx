import React from 'react';
import '../App';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <header className='py-6 md:py-4 mb-16 bg-white'>
          <div className={'container mx-auto md:flex md:items-center'}>
              <div className={'text-black flex w-full items-center flex-row justify-between text-1xl'}>
                  <h1 className="text-3xl uppercase font-thin">
                      <Link to={'/'}>random dog images</Link>
                  </h1>
                  <div className={'py-3 px-5 text-base border-gray-500 border rounded-md'}>
                      <Link to={'/favorites'}>Favorites</Link>
                  </div>
              </div>
          </div>
      </header>
  );
};

export default Navbar;
