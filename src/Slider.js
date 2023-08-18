import React from 'react';
import myImage1 from './img/men/p7.webp';
import myImage2 from './img/men/shirts/p4.webp';
import myImage3 from './img/kids/p6.webp';
import myImage4 from './img/kids/p2.webp';
import myImage5 from './img/men/shirts/p2.webp';
import myImage6 from './img/women/dresses/p1.webp';
import myImage7 from './img/women/dresses/p3.webp';
import myImage8 from './img/women/dresses/p5.webp';


const Slider = () => {
    return (
        <div className='od'>
            <div className="fpheading">
                <h1>Featured Products</h1>
            </div>
            <div className="owl-carousel owl-theme fContainer">
                <div className="item fc">
                    <div className="card d-block" style={{ width: '18rem' }}>
                        <img className='cimage' src={myImage1} alt="Slide 1" />
                        <div className="card-body">
                            <h5 className="card-title">Product</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and
                                make up the bulk of the card's content.
                            </p>
                        </div>
                        <button
                            className="btn btn-outline-success add-to-cart navbar-text apcb"
                            type="submit"
                        >
                            <i className="fas fa-cart-shopping"></i> Add to cart
                        </button>
                    </div>
                </div>
                <div className="item fc">
                    <div className="card d-block" style={{ width: '18rem' }}>
                        <img className='cimage' src={myImage2} alt="Slide 1" />
                        <div className="card-body">
                            <h5 className="card-title">Product</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and
                                make up the bulk of the card's content.
                            </p>
                        </div>
                        <button
                            className="btn btn-outline-success add-to-cart navbar-text apcb"
                            type="submit"
                        >
                            <i className="fas fa-cart-shopping"></i> Add to cart
                        </button>
                    </div>
                </div>
                <div className="item fc">
                    <div className="card d-block" style={{ width: '18rem' }}>
                        <img className='cimage' src={myImage3} alt="Slide 1" />
                        <div className="card-body">
                            <h5 className="card-title">Product</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and
                                make up the bulk of the card's content.
                            </p>
                        </div>
                        <button
                            className="btn btn-outline-success add-to-cart navbar-text apcb"
                            type="submit"
                        >
                            <i className="fas fa-cart-shopping"></i> Add to cart
                        </button>
                    </div>
                </div>
                <div className="item fc">
                    <div className="card d-block" style={{ width: '18rem' }}>
                        <img className='cimage' src={myImage4} alt="Slide 1" />
                        <div className="card-body">
                            <h5 className="card-title">Product</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and
                                make up the bulk of the card's content.
                            </p>
                        </div>
                        <button
                            className="btn btn-outline-success add-to-cart navbar-text apcb"
                            type="submit"
                        >
                            <i className="fas fa-cart-shopping"></i> Add to cart
                        </button>
                    </div>
                </div>
                <div className="item fc">
                    <div className="card d-block" style={{ width: '18rem' }}>
                        <img className='cimage' src={myImage5} alt="Slide 1" />
                        <div className="card-body">
                            <h5 className="card-title">Product</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and
                                make up the bulk of the card's content.
                            </p>
                        </div>
                        <button
                            className="btn btn-outline-success add-to-cart navbar-text apcb"
                            type="submit"
                        >
                            <i className="fas fa-cart-shopping"></i> Add to cart
                        </button>
                    </div>
                </div>
                <div className="item fc">
                    <div className="card d-block" style={{ width: '18rem' }}>
                        <img className='cimage' src={myImage6} alt="Slide 1" />
                        <div className="card-body">
                            <h5 className="card-title">Product</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and
                                make up the bulk of the card's content.
                            </p>
                        </div>
                        <button
                            className="btn btn-outline-success add-to-cart navbar-text apcb"
                            type="submit"
                        >
                            <i className="fas fa-cart-shopping"></i> Add to cart
                        </button>
                    </div>
                </div>
                <div className="item fc">
                    <div className="card d-block" style={{ width: '18rem' }}>
                        <img className='cimage' src={myImage7} alt="Slide 1" />
                        <div className="card-body">
                            <h5 className="card-title">Product</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and
                                make up the bulk of the card's content.
                            </p>
                        </div>
                        <button
                            className="btn btn-outline-success add-to-cart navbar-text apcb"
                            type="submit"
                        >
                            <i className="fas fa-cart-shopping"></i> Add to cart
                        </button>
                    </div>
                </div>
                <div className="item fc">
                    <div className="card d-block" style={{ width: '18rem' }}>
                        <img className='cimage' src={myImage8} alt="Slide 1" />
                        <div className="card-body">
                            <h5 className="card-title">Product</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and
                                make up the bulk of the card's content.
                            </p>
                        </div>
                        <button
                            className="btn btn-outline-success add-to-cart navbar-text apcb"
                            type="submit"
                        >
                            <i className="fas fa-cart-shopping"></i> Add to cart
                        </button>
                    </div>
                </div>
            
            </div>
        </div>
    );
};

export default Slider;
