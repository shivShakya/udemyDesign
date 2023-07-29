import React from 'react';
import './common.css';

function Overview(){
       
        return (
                <div className='overview'>
                <h3>What You'll Learn</h3>
                <ul>
                   <div className='over-li'>
                        <li>
                        Develop modern, complex, responsive, and scalable web applications with Angular.
                        </li>
                        <li>
                        Fully understand the architecture behind an Angular application and how to use it.
                        </li>
                    </div>

                  <div className='over-li'>
                        <li>
                        Use the gained, deep understanding of the Angular fundamentals to quickly establish <br/>yourself as a frontend developer.
                        </li>
                         <li>
                        Create single-page applications with one of the most modern JavaScript frameworks out there.
                        </li>

                    </div>  
                </ul>
            </div>
        )
}


export default Overview;