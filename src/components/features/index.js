import React from 'react';
import './features.scss';

function index(props) {
    return (
        <div className='section' id='section-bg'>
            <section className="features">
                <div className="container">
                    <div className="section-title">
                        <h2>Features</h2>
                        {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            {/* <img src="assets/img/features-1.svg" class="img-fluid" alt=""> */}
                        </div>
                        <div className="col-md-7 pt-4">
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <ul>
                                <li><i className="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><i className="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 order-1 order-md-2">
                            {/* <img src="assets/img/features-2.svg" class="img-fluid" alt=""> */}
                        </div>
                        <div className="col-md-7 pt-5 order-2 order-md-1">
                            <h3>Corporis temporibus maiores provident</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default index;