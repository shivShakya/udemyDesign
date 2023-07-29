import React from 'react';
import './nav.css'
function UdemyNav(){
       
        return (
        <div className='udemy'>
      <div className='nav-content'>
        <div className='logo'>
          <a href='/'>
            <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt='Udemy Logo' />
          </a>
        </div>
        <div className='nav-links'>
        <a href='/udemy-category'>Categories</a>
        </div>
        <div className='search-bar'>
          <input type='text' placeholder='Search Udemy categories...' />
        </div>
        <div className='nav-links'>
          <a href='/udemy-business'>Udemy Business</a>
          <a href='/techon-udemy'>Teach On Udemy</a>
          <a href='/my-learning'>MyLearning</a>
          <a href='/likes'>
            <i className='fa fa-heart'></i>
          </a>
          <a href='/cart'>
            <i className='fa fa-shopping-cart'></i>
          </a>
          <a href='/notifications'>
            <i className='fa fa-bell'></i>
          </a>
          <a href='/account'>
            <i className='fa fa-user'></i>
          </a>
        </div>
      </div>
    </div>
        )
}


export default UdemyNav;