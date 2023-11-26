import React, { useState } from "react";
import Search from "../../../public/search.png"
import User from "../../../public/login.png"
import Heart from "../../../public/wishlish.png"
import Cart from "../../../public/cart.png"

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-purple-300 relative justify-between text-center items-center p-8 sticky">
      <h1 className="text-4xl font-bolder text-black">Maliki.</h1>

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li className="font-sans text-base cursor-pointer">
          <a>Home</a>
        </li>
        <li className="font-sans text-base cursor-pointer">
          <a>Shop</a>
        </li>
        <li className="font-sans text-base cursor-pointer">
          <a>Product</a>
        </li>
        <li className="font-sans text-base cursor-pointer">
          <a>Blog</a>
        </li>
      </ul>


      <ul>
        <li className="cursor-pointer">
         <img src={Search} alt="" />
        </li>

        <li className="cursor-pointer">
         <img src={User} alt=""/>
        </li>

        <li className="cursor-pointer">
         <img src={Heart} alt=""/>
        </li>


        <li className="cursor-pointer">
         <img src={Cart} alt=""/>
        </li>
      </ul>


    </nav>
  );
};

export default NavBar;
