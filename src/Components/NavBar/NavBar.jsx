import React, {useState } from "react";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-black justify-between text-center items-center p-8 sticky">
    <h1 className="text-xl">Emmanuel</h1>

    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <ul className={menuOpen ? "open" : ""}>
      <li className="font-sans text-base">
<a>Home</a>
      </li>
      <li className="font-sans text-base">
    <a>Portfolio</a>
      </li>
      <li className="font-sans text-base">
    <a>About Us</a>
      </li>
      <li className="font-sans text-base">
   <a>Testimonial</a>
      </li>
      <li className="font-sans text-base">
   <a>Contact</a>
      </li>
    </ul>
  </nav>
  )
}

export default NavBar