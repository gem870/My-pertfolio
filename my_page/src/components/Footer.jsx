import React from "react";
import Fbook from './assets/facebook.png';
import LinkedIn from './assets/linkedin.png';
import Instagram from './assets/instagram.png';
import Git from './assets/github.png'


const Footer = () => {
    return ( 
        <div className=" flex flex-col mt-10 z-20">
  {/* Content of the page */}
  <div className="flex-grow">
    {/* Your page content goes here */}
  </div>

  {/* Fixed Footer */}
  <footer className="rounded-t-3xl fixed bottom-0 left-0 w-full bg-[#236d6a] text-gray-300 text-center text-[15px]">
    © 2024 Emmenuel Victor. All rights reserved.
    <ul className="flex items-center justify-center">
        <li><a href="#"><img src={Fbook} alt="image" className="w-5 md:w-6 mx-3 " /></a></li>
        <li><a href="https://www.linkedin.com/in/chibuike-emmanuel-b8b29b269/"><img src={LinkedIn} alt="image" className="w-5 md:w-5 mx-3" /></a></li>
        <li><a href="#"><img src={Instagram} alt="image" className="w-5 md:w-5 mx-3" /></a></li>
        <li><a href="https://github.com/gem870"><img src={Git} alt="Icon" className="w-5 md:w-5 mx-3" /></a></li>
    </ul>
  </footer>
</div>
     );
}
 
export default Footer;