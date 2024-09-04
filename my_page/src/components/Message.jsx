import { useState } from "react";

const Message = () => {
        const [formData, setFormData] = useState({ name: '', email: '', message: '' });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
      
          const response = await fetch('http://localhost:4000/message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
      
          if (response.ok) {
            alert('Message sent!');
            setFormData({ name: '', email: '', message: '' });
          } else {
            alert('Failed to send message.');
          }
        };

    return ( 
        <div id="message" className="mx-auto text-center flex flex-col justify-center shadow-custom mt-20 md:w-[1000px] mb-20">
            <div className=" text-gray-500 text-[20px] mt-20 mb-10 mx-auto text-center flex flex-col justify-center ">
            <h2 className="p-5 font-bold text-[15px] md:text-[15px]">I would love to here from you.</h2>

           <form onSubmit={handleSubmit}>
           <div className="mx-auto  justify-center">

                <div className="md:flex">
                <div className="block mt-1">
                    <input  type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required className="my-1 md:ml-2 md:my-6 py-2 px-2 md:w-[350px] bg-[#28302a] rounded-md text-gray-100 border border-gray-500" placeholder="full name"/>  <br />
                                
                    <input  type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required className="my-1 md:ml-2 md:my-1 py-2 px-2 md:w-[350px] bg-[#28302a] rounded-md text-gray-100 border border-gray-500" placeholder="mail"/> 
                            
                </div>

                <div className="md:mx-3">
                    <textarea
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     required
                    placeholder="message"  className="px-[10px] mt-2 md:w-[255px] bg-[#28302a] rounded-md text-gray-100 border border-gray-500 h-[200px]"></textarea>
                </div>
                </div>

                <div className="p-2 md:flex">
                 <button type="submit"  className="bg-[#10c2aa] mb-2 px-[60px] mr-1 md:px-10 p-2 rounded-md text-black transition-transform duration-500 ease-in-out transform hover:scale-110">Submit</button>
              
                    
                </div>

                
            </div>    
           </form>
            
            
        </div>
        </div>
     );
}
 
export default Message;