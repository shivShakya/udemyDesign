import React , {useState ,useEffect} from 'react';
import './nav.css';
function AngularNav(){

        const [navbarStyle, setNavbarStyle] = useState({ zIndex: 1 });

        useEffect(() => {
                const handleScroll = () => {
                  if (window.scrollY > 40) {
                    setNavbarStyle({ zIndex: 2 });
                  } else {
                    setNavbarStyle({ zIndex: -2 });
                  }
                };
                window.addEventListener('scroll', handleScroll);
                return () => {
                  window.removeEventListener('scroll', handleScroll);
                };
              }, []);


            
            
       
        return (
                <div className='angular' style={navbarStyle}>
                <div className='course-info'>
                      <h2>Angular - The Complete Guide (2023 Edition)</h2>
                      <p>
        Bestseller | Rating: 4.6  <i className='fa fa-star'></i> (188,295 ratings) | 697,686 students
      </p>
                </div>
              </div>
        )
}


export default AngularNav;