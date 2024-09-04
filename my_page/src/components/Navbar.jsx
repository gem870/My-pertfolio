import React from "react";
import menu from './assets/hamburger.png';
import close from './assets/cross-mark.png';
import { useState, useEffect } from "react";
import logo from './assets/Untitled design.png'


const Navbar = () => {
  const[nav, setNav] = useState(true);
  const[contact, setContact] = useState(true);
  const handleNav = () =>{
    setNav(!nav)
  }
  const handleContact = () =>{
    setContact(!contact)
  }

  return (
   <div className=" w-full fixed z-20">
    <div className="">
    <div className="flex items-center justify-center h-[100px] bg-[#000300] pt-1">
      <div className="flex mt-[-10px] ">
        <div className="h-[60px] w-[60px] bg-slate-600 rounded-full  mx-auto mt-10 border-4 border-[#04b8b2] md:h-[100px] md:w-[100px]">
      
                    <img
                        src={logo}
                            alt="Full Image"
                            className="w-full h-full object-cover  rounded-full"
                    />
                  </div>

        
        <h1 className="text-[#04b8b2] font-bold text-2xl px-2 pt-[60px] md:text-5xl md:pt-[80px] md:pl-4">
          Emmanuel Victor
        </h1>
        <p className="text-[#a87732] text-[15px] pt-[68px] md:pt-[100px] md:text-[30px] md:pl-">Portfolio</p>

       <div onClick={handleNav} className="w-10 ">
         {!nav ? <img src={close} alt="" className="h-[25px] ml-[17px] mt-[50px] md:hidden"/> : <img src={menu} alt="" className="h-[17px] ml-[20px] mt-[50px] md:hidden"/>}
       </div>
      </div>
    </div>
    </div>

{/* Destop Nav */}
    <div className="hidden md:block mx-20 pt-2 bg-[#000300] bg-opacity-80">
      <ul className="flex  text-gray-400 items-center justify-center py-2 border-b shadow-custom border-b-gray-800">
        <a href="#about"><li className="px-5 text-[18px] hover:text-[#fa2d5d] hover:shadow-custom transition-shadow duration-300">About</li></a>
        <a href="#projects"><li className="px-5 text-[18px] hover:text-[#fa2d5d] hover:shadow-custom transition-shadow duration-300">Projects</li></a>
        <li className="px-5 text-[18px] hover:text-[#fa2d5d] hover:shadow-custom transition-shadow duration-300" onClick={handleContact}>Contact</li>
      </ul>
    </div>

{/* Phone Nav */}
    <div className={!nav ? "block mx-3  ease-in duration-500 md:hidden bg-[#000300] bg-opacity-80" : "fixed left-[-100%] ease-out duration-1000"}>
      <ul className="  text-gray-400 items-center justify-center py-2 border-b border-b-gray-800">
        <a href="#about"><li className="px-5 py-1 text-[15px] hover:text-[#fa2d5d] hover:shadow-custom transition-shadow duration-300">About</li></a>
        <a href="#projects"><li className="px-5 py-1 text-[15px] hover:text-[#fa2d5d] hover:shadow-custom transition-shadow duration-300">Projects</li></a>
        <li className="px-5 py-1 text-[15px] hover:text-[#fa2d5d] hover:shadow-custom transition-shadow duration-300" onClick={handleContact}>Contact</li>
      </ul>
    </div>

{/* Contact section */}

       <div>
            <div className={!contact ? "border border-gray-600 shadow-custom text-gray-400 mt-5 text-center max-w-[50%] rounded-3xl ease-linear duration-500 items-center justify-center mx-auto bg-black bg-opacity-80" : "right-[-100%] fixed"}>

                    <div className="md:flex px-[10px] md:py-2 md:pl-10  mt-2">
                    <label>Name: </label>
                    <p className="md:px-[28px]">Emmanuel Victor</p>
                    </div>

                    <div className="md:flex px-[10px] md:py-2 md:pl-10  ">
                    <label>Phone: </label>
                    <p className="md:px-[24px]">+234806614327</p>
                    </div>

                    <div className="md:flex px-[10px] md:py-2 md:pl-10  ">
                    <label>Email: </label>
                    <p className="md:px-[35px]">ve48381@gmail.com</p>
                    </div>

                    <div className="md:flex px-[10px] md:py-2 md:pl-10  ">
                    <label>Git: </label>
                    <a href="https://github.com/gem870"><p className="md:px-[53px] transition-transform duration-500 ease-in-out transform hover:scale-110">gem870</p></a>
                    </div>

                    <div className="md:flex px-[10px] md:py-2 md:pl-10  ">
                    <label>LinkedIn: </label>
                     <a href="https://www.linkedin.com/in/chibuike-emmanuel-b8b29b269/"><p className="md:px-[15px] transition-transform duration-500 ease-in-out transform hover:scale-110">Chibuike (Victor) Emmanuel</p></a>
                    </div>
                    <br />

                    <div className="py-4">
                    <a 
                      href="Resume.pdf"
                      download="Emmanuel Victor"
                    ><button className="bg-[#10c2aa] px-4 md:px-10 p-2 rounded-md text-black transition-transform duration-500 ease-in-out transform hover:scale-110">Download Resume</button></a>
                    </div>

                </div>
        </div>

    
   </div>
  );
};

export default Navbar;