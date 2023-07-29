import React from 'react';
import './main.css';
import Header from './Content/Header';
import Overview from './Content/overview';
import Include from './Content/Include';
import Companies from './Content/Companies';
import Courses from './Content/Courses/Courses';
import Req from './Content/Courses/Req';
import Desc from './Content/Courses/Desc';
import ExCourse from './Content/Courses/ExtraCourse/ExCourse';
import Instructor from './Content/Courses/Instructor';
import Rating from './Content/Courses/rating';
import Subscription from '../Subscription/Subscription';

function Main(){
       
        return (
        <div className='mainpage'>
            
                  <Header/>
                  <Subscription/>
                  <Overview/>
                  <Include/>
                  <Companies/>
                  <Courses/>
                   <Req/>
                  <Desc/>
                  <ExCourse/>
                  <Instructor/>
                  <Rating/>
                         
                 <h1> Main Page</h1>
        </div>
        )
}


export default Main;