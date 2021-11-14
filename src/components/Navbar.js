import React, { useState } from "react";
import { BiWorld, BiMenu } from "react-icons/bi";
import { SiTinder } from "react-icons/si";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { navbarItems } from "../items";
import "./Navbar.scss";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const {ShowNote} = useGlobalContext();

  const [toggleIcon, setToggleIcon] = useState(true);

  const showNav =()=>{
    setToggleIcon(!toggleIcon)
    ShowNote(false)
  }

  const hideNav=()=>{
    setToggleIcon(!toggleIcon)
    ShowNote(true)
  }

  return (
    <header>
      <nav className="navbar">
        <div className="navbar__header">
          <div className="navbar-brand d-flex align-items-center">
            <SiTinder className="d-inline-block brand-logo" />
            <span>tinder</span>
          </div>

          <div className="icon">
            {toggleIcon ? (
              <GiHamburgerMenu onClick={showNav} />
            ) : (
              <FaTimes onClick={hideNav} />
            )}
          </div>
        </div>

        {toggleIcon ? (
          <div className="navbar__right">
            <div className="items">
              {navbarItems.map((item, index) => (
                <div key={index} className="item">
                  {item.title}
                </div>
              ))}
            </div>
            <div className="items">
              <button className="btn nav-lang d-flex align-items-center">
                <BiWorld />
                <span className="ms-2">ENGLISH</span>
              </button>
              <button className="btn nav-login">Log in</button>
            </div>
          </div>
        ) : (
          <div className="navbar__right navbar__right--active">
            <div className="items active">
              {navbarItems.map((item, index) => (
                <div key={index} className="item">
                  {item.title}
                </div>
              ))}
            </div>
            <div className="right_items">
              <button className="btn nav-lang d-flex align-items-center">
                <BiWorld />
                <span className="ms-2">ENGLISH</span>
              </button>
              <button className="btn nav-login ms-0">Log in</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
