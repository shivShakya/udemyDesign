import React,{ useState} from 'react'; 

import './Courses.css';


function Desc(){
        
        const [toggle, setToggle] = useState(true);
        const [height , setHeight] = useState('');


        

        const handleToggle = () => {
                   setToggle(!toggle);
                   setHeight(toggle ? '120rem' : '23rem');
        }


        


 return (
        <div className='desc' style={{height : `${height}`}}>
                 <h1> Description </h1>

             {
                  toggle ? (
                        <p >Join the most comprehensive and bestselling Angular course on Udemy and learn all about this amazing framework from the ground up, in great depth!<br></br><br></br>
                        This course starts from scratch, you neither need to know Angular 1 nor Angular 2!<br></br><br></br>
                        
                        
                        From Setup to Deployment, this course covers it all! You'll learn all about Components, Directives, Services, Forms, Http Access, Authentication, Optimizing an Angular App with Modules and Offline Compilation and much more - and in the end: You'll learn how to deploy an application!<br></br><br></br>
                        But that's not all! This course will also show you how to use the Angular CLI and feature a complete project, which allows you to practice the things learned throughout the course!<br></br><br></br>   
                        <button onClick={handleToggle}>read more</button> 
                          </p>

                          
                  ):
                  (

                        <p>Join the most comprehensive and bestselling Angular course on Udemy and learn all about this amazing framework from the ground up, in great depth!<br></br><br></br>
                        This course starts from scratch, you neither need to know Angular 1 nor Angular 2!<br></br><br></br>
                        
                        
                        From Setup to Deployment, this course covers it all! You'll learn all about Components, Directives, Services, Forms, Http Access, Authentication, Optimizing an Angular App with Modules and Offline Compilation and much more - and in the end: You'll learn how to deploy an application!<br></br><br></br>
                        But that's not all! This course will also show you how to use the Angular CLI and feature a complete project, which allows you to practice the things learned throughout the course!<br></br><br></br>
                        And if you do get stuck, you benefit from an extremely fast and friendly support - both via direct messaging or discussion. You have my word! ;-)<br></br><br></br>
                        Angular is one of the most modern, performance-efficient and powerful frontend frameworks you can learn as of today. It allows you to build great web apps which offer awesome user experiences! Learn all the fundamentals you need to know to get started developing Angular applications right away.<br></br><br></br>
                        Hear what my students have to say<br></br><br></br>
                        Absolutely fantastic tutorial series. I cannot thank you enough. The quality is first class and your presentational skills are second to none. Keep up this excellent work. You really rock!﻿ - Paul Whitehouse<br></br><br></br>
                        The instructor, Max, is very enthusiastic and engaging. He does a great job of explaining what he's doing and why rather than having students just mimic his coding. Max was also very responsive to questions. I would recommend this course and any others that he offers. Thanks, Max!<br></br>
                        As a person new to both JavaScript and Angular 2 I found this course extremely helpful because Max does a great job of explaining all the important concepts behind the code. Max has a great teaching ability to focus on what his audience needs to understand.<br></br>
                        This Course uses TypeScript<br></br>
                        TypeScript is the main language used by the official Angular team and the language you'll mostly see in Angular tutorials. It's a superset to JavaScript and makes writing Angular apps really easy. Using it ensures, that you will have the best possible preparation for creating Angular apps. Check out the free videos for more information.<br></br>
                        TypeScript knowledge is, however, not required - basic JavaScript knowledge is enough.<br></br>
                        Why Angular?<br></br>
                        Angular is the next big deal. Being the successor of the overwhelmingly successful Angular.js framework it’s bound to shape the future of frontend development in a similar way. The powerful features and capabilities of Angular allow you to create complex, customizable, modern, responsive and user friendly web applications.<br></br>
                        Angular is faster than Angular 1 and offers a much more flexible and modular development approach. After taking this course you’ll be able to fully take advantage of all those features and start developing awesome applications immediately.<br></br>
                        Due to the drastic differences between Angular 1 and Angular (= Angular 2+) you don’t need to know anything about Angular.js to be able to benefit from this course and build your futures projects with Angular.<br></br>
                        Get a very deep understanding of how to create Angular applications<br></br>
                        This course will teach you all the fundamentals about modules, directives, components, databinding, routing, HTTP access and much more! We will take a lot of deep dives and each section is backed up with a real project. All examples showcase the features Angular offers and how to apply them correctly.<br></br>
                        Specifically you will learn:<br></br>
                        <ul>
                           <li>Which architecture Angular uses</li>
                          <li>How to use TypeScript to write Angular applications</li>
                          <li>All about directives and components, including the creation of custom directives/ components</li>
                           <li>How databinding works</li>
                          <li>All about routing and handling navigation</li>
                          <li>What pipes are and how to use them</li>
                          <li>How to send HTTP requests (e.g. to REST APIs)</li>
                           <li>What dependency injection is and how to use it</li>
                          <li>How to use modules in Angular</li>
                          <li>How to optimize your (bigger) Angular applications</li>
                         <li>An introduction to NgRx and complex state management</li>
                          <li>We will build a major project in this course so that you can practice all concepts</li>
                            <li>And so much more!</li>
                        </ul><br></br><br></br>
                        <b>Pay once, benefit a lifetime!</b><br></br><br></br>
                        Don’t lose any time, gain an edge and start developing now!
                        
                        <h4><b>Who this course is for:</b></h4>
                          <ul>
                                <li>Newcomer as well as experienced frontend developers interested in learning a modern JavaScript framework</li>
                                <li> This course is for everyone interested in learning a state-of-the-art frontend JavaScript framework</li>
                                <li>  Taking this course will enable you to be amongst the first to gain a very solid understanding of Angular</li>
                          </ul>
                            
                          <button onClick={handleToggle}>read less</button>
                          </p>
                         
                  )
             }
        </div>
        )
}


export default Desc;