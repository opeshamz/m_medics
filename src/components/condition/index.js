import React from 'react';
import './condition.scss';

function index(props) {
    return (
        <div className='section' id='condic'>
            <h1>SHOP BY CONDITION</h1>
            <div className='d-flex flex-row justify-content-evenly align-items-center'>
                <div className='conditinssub' id='pain'>
                    <div>
                        <h4>PAIN</h4>
                    </div>

                </div>
                <div className='conditinssub' id='eye'>
                    <div>
                        <h4>
                            EYE
                        </h4>
                    </div>
                </div>
                <div className='conditinssub' id='cough'>
                    <div>
                        <h4>COUGH</h4>
                    </div>
                </div>
                <div className='conditinssub' id='flu'>
                    <div>
                        <h4>
                            FLU
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;