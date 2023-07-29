import React , {useState} from 'react';
import './Courses.css';
function ExCourse(){

    const [showDetails, setShowDetails] = useState(true);
    const [height , setHeight] = useState('');

    const handleToggle = () => {
        setShowDetails(!showDetails);
        setHeight(showDetails?'60rem' : '30rem')
    };
       
       return (
           <div className='inst' style={{height : `${height}`}}>
                <h1> Instructor </h1>

                <div className='inst-info'>
                         <a href='/'>Maximilian Schwarzmüller</a>
                         <p>AWS certified, Professional Web Developer and Instructor</p>

                         <div className='inst-details'>
                               <img src='https://img-c.udemycdn.com/user/200_H/13952972_e853.jpg' className='inst-img' alt='instructor'/>
                               <ul>
                                    <li className='fa fa-star'>  4.6 Instructor Rating</li>
                                    <li  className='fa fa-medal'>  969,370 Reviews</li>
                                    <li  className='fas fa-address-card'>  2,592,042 Students</li>
                                    <li  className='fa fa-video'>   59 Courses</li>
                               </ul>
                         </div>

                </div>

                { showDetails?(<p>
                    <h5>Experience as (Web) Developer</h5>
                       Starting out at the age of 12 I never stopped learning new programming skills and languages. 
                       Early I started creating websites for friends and just for fun as well. Besides web development
                       I also explored Python and other non-web-only languages. This passion has since lasted and lead 
                       to my decision of working as a freelance web developer and consultant. The success and fun I have 
                       in this job is immense and really keeps that passion burningly alive.<button onClick={handleToggle}>Show More</button>               
                       </p>
                     ):(<p>

                          <div> 
                          <h5>Experience as (Web) Developer</h5>
                                Starting out at the age of 12 I never stopped learning new programming skills and languages. Early I started creating websites for friends and just for fun as well. Besides web development I also explored Python and other non-web-only languages. This passion has since lasted and lead to my decision of working as a freelance web developer and consultant. The success and fun I have in this job is immense and really keeps that passion burningly alive.
                                Starting web development on the backend (PHP with Laravel, NodeJS, Python) I also became more and more of a frontend developer using modern frameworks like React, Angular or VueJS in a lot of projects. I love both worlds nowadays!
                                I also build full-stack applications and acquired expert DevOps and cloud computing knowledge - proven by the many AWS certifications I hold (incl. the top-level Solutions Architect Professional certification).
                                 As a self-taught developer I had the chance to broaden my horizon by studying Business Administration where I hold a Master's degree. That enabled me to work in a major strategy consultancy as well as a bank. While learning, that I enjoy development more than these fields, the time in this sector greatly improved my overall experience and skills.
                               <h5>Experience as Instructor</h5>
                               As a self-taught professional I really know the hard parts and the difficult topics when learning new or improving on already-known languages. This background and experience enables me to focus on the most relevant key concepts and topics. My track record of many 5-star rated courses and more than 2,000,000 students on Udemy is the best proof for that.
                                Whether working as development instructor or teaching Business Administration I always received great feedback. The most rewarding experience is to see how people find new, better jobs, build awesome web applications, acquire amazing projects or simply enjoy their hobby with the help of my content.
                                Together with Manuel Lorenz, I founded Academind to offer the best possible learning experience to our more than 2,000,000 students.<button onClick={handleToggle}>Show less</button>               
                          </div>

                          </p>
                     )
                             
}
           </div>
       )
}

export default ExCourse;    