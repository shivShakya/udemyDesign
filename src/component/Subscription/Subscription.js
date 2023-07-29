import React , {useState } from 'react';
import './Subscription.css';

function Subscription(){

       const [state , setState] = useState(true);
       const [heart, setHeart] = useState('r');

   const handleHeart = () => {
     setHeart(heart === 'r' ? 's' : 'r');
}

const handleState = () => {
   setState(true);
}

const handleState2 = () => {
setState(false);
}


       
       return (
       <div className='container'>
        <div className='sub-box'>
             <div className='video'>
                   <img src='https://img-c.udemycdn.com/course/240x135/756150_c033_2.jpg' style={{'width':'350px'}} alt='video'/>
             </div>
             <div className='btn-box'>
                   <button onClick={handleState}><b>Personal</b></button>
                   <button onClick={handleState2}><b>Teams</b></button>
             </div>

             {
                  state?(
                       <div className='personal'>
                             <h5><b>Subscribe to Udemy’s top courses</b></h5>
                             <p>Get this course, plus 8,000+ of our top-rated courses, with Personal Plan. <a href='/'>Learn more</a></p>

                             <button className='per-btn'>Start Subscription</button>
                               <div className='p-tags'>
                                <p>Starting at ₹750 per month</p>
                                <p>Cancel Anytime</p>
                                </div>
                                <hr></hr>

                            <h5><b>₹ 3199</b></h5>
                             <div >
                                 <button className='active'><b>Buy this course</b></button>
                                 <button className='star-btn'><i className={`fa${heart === 'r' ? 'r' : 's'} fa-heart`} onClick={handleHeart}></i></button>
                            </div>
                            <div className='p-tags'>
                                   <p>30-Day Money-Back Guarantee</p>
                                    <p>Full Lifetime Access</p>
                           </div>

            
                           <div className='pa-links'>
                                       <a href='/'>Share</a>
                                       <a href='/'> Gift the course</a>
                                       <a href='/'>Apply Coupon</a>
                           </div>
                           
                        </div>
                  ):(
                    <div className='teams'>
                           <img src='https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg' alt='udm'/>

                           <p>Subscribe to this course and 22,000+ top‑rated Udemy courses for your organization.</p>

                           <button>Try Udemy Business</button>

                           <ul>
                               <li className='fa fa-correct'>For teams of 5 or more users</li>
                               <li className='fa fa-correct'>22,000+ fresh & in-demand courses</li>
                               <li className='fa fa-correct'>Learning Engagement tools</li>
                               <li className='fa fa-correct'>SSO and LMS Integrations</li>
                           </ul>
                    </div>
                  )
             }


        </div>
        </div> 
       )
}

export default Subscription;