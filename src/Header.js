import React from 'react';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand b" href="/"><h1>Ecommerce</h1></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/**/}
                            </li>
                        </ul>

                        <form className="header-search d-flex mx-auto" role="search">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success header-search-btn" type="submit">Search</button>
                        </form>

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/**/}
                            </li>
                        </ul>

                        <div className="l-c d-flex flex-md-column flex-lg-row flex-column">
                            <a href="../login" className="btn btn-outline-success header-login-btn">
                                Login
                            </a>
                            <a href="../cart" className="btn btn-outline-success header-cart-btn">
                                <i className="fa-solid fa-cart-shopping"></i>Cart
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container-fluid header bn ">
                <ul className="nav">
                    <li className="nav-item nav-2 ">
                        <a className="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item nav-2">
                        <a className="nav-link" href="../allproducts">All Products</a>
                    </li>
                    <li className="nav-item nav-2 nav-2 dropdown">
                        <a href='#' className="women-btn nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Women
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="../women/allproducts-women">All Products</a></li>
                            <li><a className="dropdown-item" href="../women/women-dresses">Dresses</a></li>
                            <li><a className="dropdown-item" href="../women/women-pants">Pants</a></li>
                            <li><a className="dropdown-item" href="../women/women-skirts">Skirts</a></li>
                        </ul>
                    </li>
                    <li className="nav-item nav-2 dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Men
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="../men/allproducts-men">All Products</a></li>
                            <li><a className="dropdown-item" href="../men/men-shirts">Shirts</a></li>
                            <li><a className="dropdown-item" href="../men/men-pants">Pants</a></li>
                            <li><a className="dropdown-item" href="../men/men-hoodies">Hoodies</a></li>
                        </ul>
                    </li>
                    <li className="nav-item nav-2">
                        <a className="nav-link" href="../kids">Kids</a>
                    </li>
                    <li className="nav-item nav-2 hc">
                        <a className="nav-link header-contact" href="../contactus">Contact</a>
                    </li>
                </ul>
            </div>

            <div className=" new-contact cmv">
                <ul className="nav nav-2">
                    <li className="nav-item"><a className="nav-link" href="../contactus">Contact</a></li>
                </ul>
            </div>
        </>
    );
};

export default Header;
