import React from 'react';
import './Courses.css';

function Rating() {
  return (
    <div className='rating'>
      <h5 className='rating__header'>
        <li className='fa fa-star'></li> 4.6 course rating
        <li>188K ratings</li>
      </h5>
     <div className='rat'>
      <div className='rating__item'>
      <hr/>
        <div className='rating__user'>
          <img src='https://img-c.udemycdn.com/user/50x50/173225246_7f65_2.jpg' alt='user-img' />
          <div>
            <h3>Sourav</h3>
            <div className='rating__stars'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <p>2 weeks ago</p>
            </div>
          </div>
          <i className='fas fa-hiking'></i>
        </div>

        <div className='rating__comment'>
          One of the best courses that I have come across, was immersed in it from start to end.
           Great coverage of angular topics and good side project to practice and follow along 
           the course
        </div>

        <div className='rating__helpful'>
          <h6>Helpful ?</h6>
          <i className='fa fa-thumbs-up'></i>
          <i className='fa fa-thumbs-down'></i>
        </div>
      </div>

      <div className='rating__item'>
      <hr/>
        <div className='rating__user'>
          <img src='https://img-c.udemycdn.com/user/50x50/80184076_2609.jpg' alt='user-img' />
          <div>
            <h3>Yulian K.</h3>
            <div className='rating__stars'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <p>3 weeks ago</p>
            </div>
          </div>
          <i className='fas fa-hiking'></i>
        </div>

        <div className='rating__comment'>
        It's an excellent course for everybody who wants to learn Angular. It contains information
         about Angular and related topics like TypeScript, NgRX(state library), and some explanations
          regarding RxJS. But before 
        </div>

        <div className='rating__helpful'>
          <h6>Helpful ?</h6>
          <i className='fa fa-thumbs-up'></i>
          <i className='fa fa-thumbs-down'></i>
        </div>
      </div>

      <div className='rating__item'>
      <hr/>
        <div className='rating__user'>
          <img src='https://img-c.udemycdn.com/user/50x50/226003322_d4b7.jpg' alt='user-img' />
          <div>
            <h3>Peter I.</h3>
            <div className='rating__stars'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <p>2 weeks ago</p>
            </div>
          </div>
          <i className='fas fa-hiking'></i>
        </div>

        <div className='rating__comment'>
        It was a very well structured course and you explain very well. 
        Just when it came to ng-rx with and without standalone-components 
        with new and alternative syntax I needed to pause the video quite 
        often, to follow in the right .
        </div>

        <div className='rating__helpful'>
          <h6>Helpful ?</h6>
          <i className='fa fa-thumbs-up'></i>
          <i className='fa fa-thumbs-down'></i>
        </div>
      </div>

      <div className='rating__item'>
      <hr/>
        <div className='rating__user'>
          <img src='https://img-c.udemycdn.com/user/50x50/64568100_3313_2.jpg' alt='user-img' />
          <div>
            <h3>Sourav</h3>
            <div className='rating__stars'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <p>2 weeks ago</p>
            </div>
          </div>
          <i className='fas fa-hiking'></i>
        </div>

        <div className='rating__comment'>
        Comprehensive and easy to follow. May not be for absolute beginners to programming,
         as some people have said they got lost. I already know a number of languages so picking
          this up was very straightforward. I will recommend you 
        </div>

        <div className='rating__helpful'>
          <h6>Helpful ?</h6>
          <i className='fa fa-thumbs-up'></i>
          <i className='fa fa-thumbs-down'></i>
        </div>
      </div>

      </div> 
    </div>
  );
}

export default Rating;
 