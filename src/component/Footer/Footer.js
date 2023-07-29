import React from 'react';
import './footer.css';

function Footer(){
        
       return(
           <div className='footer'>

                 <div className='teach'>
                      <div className='teach-heads'>
                       <h5>Teach the world online</h5>
                       <p>Create an online video course, reach students across the globe, and earn money</p>
                       </div>
                       <button>Teach on Udemy</button>
                     
                 </div>
                 <hr></hr>

                 <div className='comp-name'> 
                       <h5>Top companies choose <a href='/'>Udemy Business</a> to build in-demand career skills.</h5>

                       <div className='comp-icon'>
                        <img src='https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg' alt='Nasdaq Logo' />
                        <img src='https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg' alt='volk Logo' />
                        <img src='https://s.udemycdn.com/partner-logos/v4/box-dark.svg' alt='box Logo' />
                        <img src='https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg' alt='NetApp Logo' />
                        <img src='https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg' alt='Eventbrite Logo' />
                       </div>
                 </div>
                 <hr></hr>

                 <div className='udm'>

                    <div className='udm-flex'>

                     <div className='anchors'>
                            <a href='/'>Udemy Business</a>
                            <a href='/'>Careers</a>
                            <a href='/'>Terms</a>
                            <a href='/'>Teach on Udemy</a>
                            <a href='/'>Blog</a>
                            <a href='/'>Privacy policy</a>
                            <a href='/'>Get the app</a>
                            <a href='/'>Help and Support</a>
                            <a href='/'>Cookies Settings</a>
                            <a href='/'>About us</a>
                            <a href='/'>Affiliate</a>
                            <a href='/'>Sitemap</a>
                            <a href='/'>Contact us</a>
                            <a href='/'>Investors</a>
                            <a href='/'>Accessibility statement</a>        
                     </div>

                     <button> <i className='fa fa-globe'>English</i></button>

                     </div>
                   <img src ='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg' alt = 'logo' />


                 </div>
           </div>
       )
}

export default Footer;