import React from 'react';
import FImg from '../assets/Feature-Img.svg';
import view from '../assets/Vector (1).svg';
import arrow from '../assets/Arrow.svg';


const Feature = () => {
  return (
    <div className="Feature-container">
      <div className="feature">
        <div className="feature-img">
          <img src={FImg} alt="Not found" />
        </div>
        <div className='feature-deatil'>
          <div className='row1'>
            <div className='col1'>
              <p>Posted on October 6th 2021</p>
            </div>
            <div className='col2'>
              <img src={view} alt="Not found" />
            </div>
            <div className='col3'>
              <p>563 views</p>
            </div>
            <div className='col4'>
              <p>Featured</p>
            </div>
          </div>
          <div className='row2'>
            <div className='col5'>
              <h4>Should I Buy a New Car or Lease a New Car in 2021?</h4>
            </div>
          </div>
          <div className='row3'>
            <div className='col6'>
              <p>We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.</p>
            </div>
          </div>
          <div className='row4'>
            <div className='col7'>
              <p>Read more</p>
            </div>
            <div className='col8'>
              <a href="/blog" target="_blank">
                <img src={arrow} alt="Not found" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Feature;