import React, { useState, useRef } from "react";
import { links, socials } from "./Data";
import logo from "./logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbars.css";
import { useEffect } from "react";

const Navbar = () => {
  const [showlinks, setShowlinks] = useState(false);
  const linkcontanerRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const linkhight = linkRef.current.getBoundingClientRect().height;
    console.log(linkhight);
    if (showlinks) {
      linkcontanerRef.current.style.height = `${linkhight + 12}px`;
    } else {
      linkcontanerRef.current.style.height = "0px";
    }
  }, [showlinks]);

  return (
    <nav className="navbar">
      <div className="contaner">
        <div className="nav-logo">
          <button className="btn" onClick={() => setShowlinks(!showlinks)}>
            {showlinks ? <FaTimes /> : <FaBars />}
          </button>
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="links" ref={linkcontanerRef}>
          <ul className="list" ref={linkRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li className="link" key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="nav-social">
          <ul className="socials">
            {socials.map((social) => {
              const { id, url, icon } = social;
              return (
                <li key={id}>
                  <a className="social" href={url}>
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
