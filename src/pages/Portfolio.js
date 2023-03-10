import React from 'react';
import Image1 from '../img/portfolio/1.png'
import Image2 from '../img/portfolio/2.png'
import Image3 from '../img/portfolio/3.png'
import Image4 from '../img/portfolio/4.png'
import Image5 from '../img/portfolio/5.png'
import Image6 from '../img/portfolio/6.png'

import { Link } from 'react-router-dom'

const Portfolio = () => {
  return <section className='section'>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
        {/* TEXT */}
        <div className='flex flex-col lg:items-start'>
          <h1 className='h1'>Portfolio</h1>
          <p className='mb-12 max-w-sm'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <b> Exercitationem, veritatis.</b> Veritatis illum aut,
              reprehenderit sed dolorem dolore.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae, iure! Ullam, dolore? Eligendi, quam mollitia.
            </p>
            <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>
              HIRE ME
            </Link>
        </div>
        {/* IMAGES GRID */}
        <div className='grid grid-cols-2 lg:gap-2'>
          {/* IMAGE */}
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img src={Image1} alt='' className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'/>
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img src={Image2} alt='' className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'/>
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img src={Image3} alt='' className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'/>
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img src={Image4} alt='' className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'/>
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img src={Image5} alt='' className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'/>
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img src={Image6} alt='' className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'/>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Portfolio;
