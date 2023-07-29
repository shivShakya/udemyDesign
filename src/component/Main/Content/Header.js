import {useState} from 'react';
import './common.css';

function Header(){

        const [isContentVisible, setContentVisible] = useState(false);

        const handleToggleContent = () => {
                setContentVisible(!isContentVisible);
               
            };
            console.log(isContentVisible);
       
        return (
                <div className='main-header'>
                <div className='course-content'>
                <div className="horizontal-links">
                    <a href="/development">Development</a>
                    <i className='fas fa-angle-right' />
                    <a href="/web-development">Web Development </a>
                    <i className='fas fa-angle-right' />
                    <a href="/angular">Angular </a>
                </div>
                    <h3>Angular - The Complete Guide (2023 Edition)</h3>
                    <p>Master Angular (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js</p>
                    <p> BestSeller 4.6 <i className='fa fa-star'/> <i className='fa fa-star'/><i className='fa fa-star'/><i className='fa fa-star'/><i className='fa fa-star'/>(188,295 ratings) 697,759 students</p>
                    <p>Created by Maximilian Schwarzmüller</p>
                    <p> <i className= 'fa fa-exclamation-circle'/>  Last updated 06/2023 <i className='fa fa-globe'/> English</p>
                    {isContentVisible?
                        (   <div>
                              <p>
                                 <i className='fas fa-closed-captioning'/> English [CC], Bulgarian [Auto], <br/>Czech [Auto], Danish [Auto], Dutch [Auto], Estonian [Auto], Finnish [Auto], French [Auto], German [Auto], Greek [Auto], Hungarian [Auto], Indonesian [Auto], Italian [Auto], Korean [Auto], Latvian [Auto], Lithuanian [Auto], Portuguese [Auto], Romanian [Auto], Simplified Chinese [Auto], Slovak [Auto], Spanish [Auto], Swedish [Auto], Thai [Auto], Ukrainian [Auto] 
                              </p>
                              <button onClick={handleToggleContent}>Read Less</button>
                            </div>
                        ):
                         (    <div>
                               <p>
                                <i className='fas fa-closed-captioning'/> English [CC], Bulgarian [Auto], <br/>Czech [Auto], Danish [Auto], Dutch [Auto] 
                              </p>
                                 <button onClick={handleToggleContent}>Read More</button>
                              </div>
                         )
                    }
                </div>
            </div>
        )
}


export default Header;