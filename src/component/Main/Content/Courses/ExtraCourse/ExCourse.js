import React, { useState } from 'react';
import './ExCourse.css';

function ExCourse() {
  const [toggle, setToggle] = useState(true);
  const [height, setHeight] = useState('');

  const handleToggle = () => {
    setToggle(!toggle);
    setHeight(toggle? '80rem':'37rem')
  };




  return (
    <div className='excourse' style ={{height: `${height}`}}>
      <h1>Student Also Bought</h1>

      {toggle ? (
        <>
          <div className='Course'>
            <div className='course-item'>
              <img src='https://img-c.udemycdn.com/course/50x50/4403121_33c8_4.jpg' alt='course-img' />
            <div className='tags'>
              <div className='uper-heads'>
                <h1>Complete Angular Developer in 2023: Zero to Mastery</h1>
                4.4 <i className='fa fa-star'> </i>
                <i className='fas fa-contacts'></i> 11,619
                <i className='fa fa-cash'></i> 3,199
                <div className='star-circle'>
                    <i className='fa fa-star'></i>
                </div>
              </div>

              <div className='lower-heads'>
                <p>27.5 total hours</p>
                <p> Updated 5/2023</p>
              </div>
            </div>

            </div>
            
            <div className='course-item'>
              <img src='https://img-c.udemycdn.com/course/50x50/4403121_33c8_4.jpg' alt='course-img' />
            <div className='tags'>
              <div className='uper-heads'>
                <h1>Complete Angular Developer in 2023: Zero to Mastery</h1>
                4.4 <i className='fa fa-star'> </i>
                <i className='fas fa-contacts'></i> 11,619
                <i className='fa fa-cash'></i> 3,199
                <div className='star-circle'>
                    <i className='fa fa-star'></i>
                </div>
              </div>

              <div className='lower-heads'>
                <p>27.5 total hours</p>
                <p> Updated 5/2023</p>
              </div>
            </div>

            </div>
            
            <div className='course-item'>
              <img src='https://img-c.udemycdn.com/course/50x50/4403121_33c8_4.jpg' alt='course-img' />
            <div className='tags'>
              <div className='uper-heads'>
                <h1>Complete Angular Developer in 2023: Zero to Mastery</h1>
                4.4 <i className='fa fa-star'> </i>
                <i className='fas fa-contacts'></i> 11,619
                <i className='fa fa-cash'></i> 3,199
                <div className='star-circle'>
                    <i className='fa fa-star'></i>
                </div>
              </div>

              <div className='lower-heads'>
                <p>27.5 total hours</p>
                <p> Updated 5/2023</p>
              </div>
            </div>

            </div>
            
            <div className='course-item'>
              <img src='https://img-c.udemycdn.com/course/50x50/4403121_33c8_4.jpg' alt='course-img' />
            <div className='tags'>
              <div className='uper-heads'>
                <h1>Complete Angular Developer in 2023: Zero to Mastery</h1>
                4.4 <i className='fa fa-star'> </i>
                <i className='fas fa-contacts'></i> 11,619
                <i className='fa fa-cash'></i> 3,199
                <div className='star-circle'>
                    <i className='fa fa-star'></i>
                </div>
              </div>

              <div className='lower-heads'>
                <p>27.5 total hours</p>
                <p> Updated 5/2023</p>
              </div>
            </div>

            </div>
            

          
          
          
          </div>
          <button onClick={handleToggle}>Read More</button>
        </>
      ) : (
        <>
          <div className='Course'>
                
          <div className='course-item'>
              <img src='https://img-c.udemycdn.com/course/50x50/4403121_33c8_4.jpg' alt='course-img' />
            <div className='tags'>
              <div className='uper-heads'>
                <h1>Complete Angular Developer in 2023: Zero to Mastery</h1>
                4.4 <i className='fa fa-star'> </i>
                <i className='fas fa-contacts'></i> 11,619
                <i className='fa fa-cash'></i> 3,199
                <div className='star-circle'>
                    <i className='fa fa-star'></i>
                </div>
              </div>

              <div className='lower-heads'>
                <p>27.5 total hours</p>
                <p> Updated 5/2023</p>
              </div>
            </div>

            </div>
            

            <div className='course-item'>
              <img src='https://img-c.udemycdn.com/course/50x50/4403121_33c8_4.jpg' alt='course-img' />
            <div className='tags'>
              <div className='uper-heads'>
                <h1>Complete Angular Developer in 2023: Zero to Mastery</h1>
                4.4 <i className='fa fa-star'> </i>
                <i className='fas fa-contacts'></i> 11,619
                <i className='fa fa-cash'></i> 3,199
                <div className='star-circle'>
                    <i className='fa fa-star'></i>
                </div>
              </div>

              <div className='lower-heads'>
                <p>27.5 total hours</p>
                <p> Updated 5/2023</p>
              </div>
            </div>

            </div>
            

            <div className='course-item'>
              <img src='https://img-c.udemycdn.com/course/50x50/4403121_33c8_4.jpg' alt='course-img' />
            <div className='tags'>
              <div className='uper-heads'>
                <h1>Complete Angular Developer in 2023: Zero to Mastery</h1>
                4.4 <i className='fa fa-star'> </i>
                <i className='fas fa-contacts'></i> 11,619
                <i className='fa fa-cash'></i> 3,199
                <div className='star-circle'>
                    <i className='fa fa-star'></i>
                </div>
              </div>

              <div className='lower-heads'>
                <p>27.5 total hours</p>
                <p> Updated 5/2023</p>
              </div>
            </div>

            </div>
            

            <div className='course-item'>
              <img src='https://img-c.udemycdn.com/course/50x50/4403121_33c8_4.jpg' alt='course-img' />
            <div className='tags'>
              <div className='uper-heads'>
                <h1>Complete Angular Developer in 2023: Zero to Mastery</h1>
                4.4 <i className='fa fa-star'> </i>
                <i className='fas fa-contacts'></i> 11,619
                <i className='fa fa-cash'></i> 3,199
                <div className='star-circle'>
                    <i className='fa fa-star'></i>
                </div>
              </div>

              <div className='lower-heads'>
                <p>27.5 total hours</p>
                <p> Updated 5/2023</p>
              </div>
            </div>

            </div>
            

            <div className='course-item'>
              <img src='https://img-c.udemycdn.com/course/50x50/4403121_33c8_4.jpg' alt='course-img' />
            <div className='tags'>
              <div className='uper-heads'>
                <h1>Complete Angular Developer in 2023: Zero to Mastery</h1>
                4.4 <i className='fa fa-star'> </i>
                <i className='fas fa-contacts'></i> 11,619
                <i className='fa fa-cash'></i> 3,199
                <div className='star-circle'>
                    <i className='fa fa-star'></i>
                </div>
              </div>

              <div className='lower-heads'>
                <p>27.5 total hours</p>
                <p> Updated 5/2023</p>
              </div>
            </div>

            </div>
            

            <div className='course-item'>
              <img src='https://img-c.udemycdn.com/course/50x50/4403121_33c8_4.jpg' alt='course-img' />
            <div className='tags'>
              <div className='uper-heads'>
                <h1>Complete Angular Developer in 2023: Zero to Mastery</h1>
                4.4 <i className='fa fa-star'> </i>
                <i className='fas fa-contacts'></i> 11,619
                <i className='fa fa-cash'></i> 3,199
                <div className='star-circle'>
                    <i className='fa fa-star'></i>
                </div>
              </div>

              <div className='lower-heads'>
                <p>27.5 total hours</p>
                <p> Updated 5/2023</p>
              </div>
            </div>

            </div>
            

            <div className='course-item'>
              <img src='https://img-c.udemycdn.com/course/50x50/4403121_33c8_4.jpg' alt='course-img' />
            <div className='tags'>
              <div className='uper-heads'>
                <h1>Complete Angular Developer in 2023: Zero to Mastery</h1>
                4.4 <i className='fa fa-star'> </i>
                <i className='fas fa-contacts'></i> 11,619
                <i className='fa fa-cash'></i> 3,199
                <div className='star-circle'>
                    <i className='fa fa-star'></i>
                </div>
              </div>

              <div className='lower-heads'>
                <p>27.5 total hours</p>
                <p> Updated 5/2023</p>
              </div>
            </div>

            </div>
            

            <div className='course-item'>
              <img src='https://img-c.udemycdn.com/course/50x50/4403121_33c8_4.jpg' alt='course-img' />
            <div className='tags'>
              <div className='uper-heads'>
                <h1>Complete Angular Developer in 2023: Zero to Mastery</h1>
                4.4 <i className='fa fa-star'> </i>
                <i className='fas fa-contacts'></i> 11,619
                <i className='fa fa-cash'></i> 3,199
                <div className='star-circle'>
                    <i className='fa fa-star'></i>
                </div>
              </div>

              <div className='lower-heads'>
                <p>27.5 total hours</p>
                <p> Updated 5/2023</p>
              </div>
            </div>

            </div>
            

            <div className='course-item'>
              <img src='https://img-c.udemycdn.com/course/50x50/4403121_33c8_4.jpg' alt='course-img' />
            <div className='tags'>
              <div className='uper-heads'>
                <h1>Complete Angular Developer in 2023: Zero to Mastery</h1>
                4.4 <i className='fa fa-star'> </i>
                <i className='fas fa-contacts'></i> 11,619
                <i className='fa fa-cash'></i> 3,199
                <div className='star-circle'>
                    <i className='fa fa-star'></i>
                </div>
              </div>

              <div className='lower-heads'>
                <p>27.5 total hours</p>
                <p> Updated 5/2023</p>
              </div>
            </div>

            </div>
            

            <div className='course-item'>
              <img src='https://img-c.udemycdn.com/course/50x50/4403121_33c8_4.jpg' alt='course-img' />
            <div className='tags'>
              <div className='uper-heads'>
                <h1>Complete Angular Developer in 2023: Zero to Mastery</h1>
                4.4 <i className='fa fa-star'> </i>
                <i className='fas fa-contacts'></i> 11,619
                <i className='fa fa-cash'></i> 3,199
                <div className='star-circle'>
                    <i className='fa fa-star'></i>
                </div>
              </div>

              <div className='lower-heads'>
                <p>27.5 total hours</p>
                <p> Updated 5/2023</p>
              </div>
            </div>

            </div>
            
          
           
          
          

             
          </div>
          <button onClick={handleToggle}>Read Less</button>
        </>
      )}
    </div>
  );
}

export default ExCourse;
