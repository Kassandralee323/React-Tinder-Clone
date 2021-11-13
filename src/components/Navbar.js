import React,{useState} from "react";
import {BiWorld,BiMenu} from 'react-icons/bi';
import {SiTinder} from 'react-icons/si';
import {FaTimes} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import { navbarItems } from "../items";

import './Navbar.scss';

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(true)
  return (
    <header>
      <nav className="navbar">
          <div className="navbar__header">
                <div className="navbar-brand d-flex align-items-center">
                  <SiTinder className="d-inline-block brand-logo" />
                  <span>tinder</span>
                </div>

                <div className="icon">
                    {toggleIcon ? <GiHamburgerMenu onClick={()=>setToggleIcon(!toggleIcon)} /> : <FaTimes onClick={()=>setToggleIcon(!toggleIcon)} /> } 
                </div>
            </div>
             
            {toggleIcon ?( 
            <div className="navbar__right">
              <div className="items">
                  {navbarItems.map((item,index)=><div key={index} className="item">{item.title}</div>)}
              </div> 
              <div className="items">
                <button className="btn nav-lang d-flex align-items-center">
                    <BiWorld />
                    <span className="ms-2">ENGLISH</span> 
                </button>
                <button className="btn nav-login ms-4">
                Log in
                </button>
              </div>
            </div>)
            : 
            <div className="navbar__right">
              <div className="items active">
                  {navbarItems.map((item,index)=><div key={index} className="item">{item.title}</div>)}
              </div> 
              <div className="right_items">
                <button className="btn nav-lang d-flex align-items-center">
                    <BiWorld />
                    <span className="ms-2">ENGLISH</span> 
                </button>
                <button className="btn nav-login ms-0">
                Log in
                </button>
              </div>
            </div>}
           
        </nav>

      {/* <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <SiTinder className="d-inline-block brand-logo" />
            <span>tinder</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          
            <BiMenu className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-3 me-auto mb-2 mb-lg-0">
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  Learn
                </a>
              </li>
              <li className="nav-item me-4">
                <a
                  className="nav-link"
                  href="#"
                >
                  Safety
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  Support
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  Swipe Night
                </a>
              </li>
            </ul>
            <div className="d-flex ">
                <button className="btn nav-lang d-flex align-items-center">
                    <BiWorld />
                    <span className="ms-2">ENGLISH</span> 
                </button>
                <button className="btn nav-login ms-4">
                Log in
                </button>
            </div>
          </div>
        </div>
      </nav> */}
    </header>
  );
};

export default Navbar;
