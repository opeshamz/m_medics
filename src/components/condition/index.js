import React from 'react';
import './condition.scss';

function index(props) {
    return (
        <div className='section' id='condic'>
            <h1>SHOP BY CONDITION</h1>
            <div className='d-flex flex-row justify-content-evenly align-items-center'>
                <div className='conditinssub' id='pain'>
                    <h4>PAIN</h4>
                </div>
                <div className='conditinssub' id='eye'>
                    <h4>
                        EYE
                    </h4>
                </div>
                <div className='conditinssub' id='cough'>
                    COUGH
                </div>
                <div className='conditinssub' id='flu'>
                    <h4>
                        FLU
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default index;