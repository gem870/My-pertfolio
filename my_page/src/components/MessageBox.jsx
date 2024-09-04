import React from "react";
import Mail from './assets/mail.png';


const MessageBox = () => {
    return ( 
        <div className="fixed right-4 bottom-[60px] p-2 rounded-lg shadow-lg max-w-xs z-20 hover:animate-none animate-bounce">
            <a href="#message"><img src={Mail} className="w-[40px] transition-transform duration-500 ease-in-out transform hover:scale-110" alt="mail" /></a>
        </div>
     );
}
 
export default MessageBox;