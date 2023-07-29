import React from 'react';
import './common.css';

function Include() {
    return (
        <div className='include'>
            <h1>This course includes</h1>
            <div className='inc-ul'>
                <ul>
                    <li><i className='fa fa-video'/> 36 hours on-demand video</li>
                    <li><i className='fa fa-tasks'/> Assignments</li>
                    <li><i className='fa fa-file'/> 47 articles</li>
                    <li><i className='fa fa-download'/> 179 downloadable resources</li>
                </ul>
                <ul>
                    <li><i className='fa fa-mobile'/> Access on mobile and TV</li>
                    <li><i className='fa fa-closed-captioning'/> Closed captions</li>
                    <li><i className='fa fa-trophy'/> Certificate of completion</li>
                </ul>
            </div>
        </div>
    );
}

export default Include;
