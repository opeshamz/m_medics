import React from 'react';
import {
    Container,
} from "react-bootstrap";
import "./Dstails.scss"

function index() {
    return (
        <div className='section'>
            <Container fluid >
                <div className="detailsrow text-center d-flex flex-row align-items-center justify-content-evenly">
                    <div className="detailscolp">
                        <div className="detailscol" >
                        </div>
                        <div className="">
                            <h5>Medicine & Health</h5>
                        </div>
                    </div>
                    <div className="detailscolp">
                        <div className="detailscol" >
                        </div>
                        <div className="">
                            <h5>Vitamins & Supplements</h5>
                        </div>
                    </div>
                    <div className="detailscolp">
                        <div className="detailscol" >
                        </div>
                        <div className="">
                            <h5>Baby & Child</h5>
                        </div>
                    </div>
                    <div className="detailscolp">
                        <div className="detailscol" >
                        </div>
                        <div className="">
                            <h5>Skin-care</h5>
                        </div>
                    </div>
                    <div className="detailscolp">
                        <div className="detailscol" >
                        </div>
                        <div className="">
                            <h5>Pharmacy Services</h5>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default index;