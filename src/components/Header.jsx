import React, { useState } from "react";
import logo from "../assets/principal.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-white text-black shadow-lg font-lato  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">Acerca del CIINTUR</a>
              </li>
              <li>
                <a href="/repository">Repositorio</a>
              </li>
              <li>
                <a href="/information">Publicaciones científica</a>
              </li>
              <li>
                <a href="/proposal"> Propuestas Innovadoras </a>
              </li>

              <li>
                <a href="/contact"> Contacto </a>
              </li>
            </ul>
          </div>
          <a href="/">
            <img src={logo} alt="Logo" className="w-36 h-auto sm:w-36 " />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li className="hover:bg-[#A1C516] rounded-md ">
              <a href="/about">Acerca del CIINTUR</a>
            </li>
            <li className="hover:bg-[#d2266b] rounded-md ">
              <a href="/repository">Repositorio</a>
            </li>
            <li className="hover:bg-[#F49A0F] rounded-md ">
              <a href="/information">Publicaciones científicas</a>
            </li>

            <li className="hover:bg-[#206DB5] rounded-md">
              <a href="/proposal"> Propuestas Innovadoras </a>
            </li>
            <li className="hover:bg-[#d2266b] rounded-md">
              <a href="/contact"> Contacto </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
