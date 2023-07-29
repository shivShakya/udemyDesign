import React, { useState } from 'react';
import './Courses.css';
import {faker} from '@faker-js/faker';


function Courses() {
  const [dropdowns, setDropdowns] = useState([
    { id: 1, isOpen: false },
    { id: 2, isOpen: false },
    { id: 3, isOpen: false },
    { id: 4, isOpen: false },
    { id: 5, isOpen: false },
    { id: 6, isOpen: false },
    { id: 7, isOpen: false },
    { id: 8, isOpen: false },
    { id: 9, isOpen: false },
    { id: 10, isOpen: false },
    { id: 11, isOpen: false },
    { id: 12, isOpen: false },
    { id: 13, isOpen: false },
    { id: 14, isOpen: false },
    { id: 15, isOpen: false },
    { id: 16, isOpen: false },
    { id: 17, isOpen: false },
    { id: 18, isOpen: false },
    { id: 19, isOpen: false },
    { id: 20, isOpen: false },
  ]);

  const toggleDropdown = (id) => {
        setDropdowns((prevDropdowns) =>
          prevDropdowns.map((dropdown) =>
            dropdown.id === id ? { ...dropdown, isOpen: !dropdown.isOpen } : dropdown
          )
        );
      };

  return (
    <div className='courses'>
      <h1>Course Content</h1>
      <ul>
        {dropdowns.map((dropdown) => (
          <li key={dropdown.id} className='drop-list' >
            <div onClick={() => toggleDropdown(dropdown.id)}>
            <i className={`fas ${dropdown.isOpen ? 'fa-angle-up' : 'fa-angle-down'}`} />
              dropdown {dropdown.id} 
            </div>
            {dropdown.isOpen && (
              <ul className='dropdown-content'>
                <li className='drop-li'>
                <a href='/' className='link'>Link 1</a>  <a href='/'>Preview Link</a> - Time Limit: 10:00
                </li>

                <li className='drop-li'>
                <a href='/' className='link'>Link 1</a>  <a href='/'>Preview Link</a> - Time Limit: 10:00
                </li>

                <li className='drop-li'>
                <a href='/' className='link'>Link 1</a>  <a href='/'>Preview Link</a> - Time Limit: 10:00
                </li>

                <li className='drop-li'>
                <a href='/' className='link'>Link 1</a>  <a href='/'>Preview Link</a> - Time Limit: 10:00
                </li>

                <li className='drop-li'>
                <a href='/' className='link'>Link 1</a>  <a href='/'>Preview Link</a> - Time Limit: 10:00
                </li>

                <li className='drop-li'>
                <a href='/' className='link'>Link 1</a>  <a href='/'>Preview Link</a> - Time Limit: 10:00
                </li> 
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
