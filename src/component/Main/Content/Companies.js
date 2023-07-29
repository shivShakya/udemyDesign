import React from 'react';
import './common.css';


function Include(){
       
        return (
        <div className='companies'>
                <h2>Top companies offer this course to their employees</h2>
                <p>This course was selected for our collection of top-rated courses trusted by businesses worldwide. <a href='/'>Learn more</a></p>
                <div className='comp-icon'>
                        <img src='https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg' alt='Nasdaq Logo' />
                        <img src='https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg' alt='volk Logo' />
                        <img src='https://s.udemycdn.com/partner-logos/v4/box-dark.svg' alt='box Logo' />
                        <img src='https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg' alt='NetApp Logo' />
                        <img src='https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg' alt='Eventbrite Logo' />
                </div>
        </div>
        )
}


export default Include;