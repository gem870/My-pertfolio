import myPic from './assets/vitor.png'


const About = () => {
 

    return ( 
       <div id='about'>
          <div className=" max-w-[1000px] mt-[-96px] w-full h-[500px] mx-auto text-center flex flex-col justify-center mb-[600px] md:mb-[70px]">

          <div className="grid md:flex  min-w-10 items-center justify-center h-[600px] ">

            <div className=' ml-[80px] md:ml-0 text-gray-400 w-[250px]'>

                  <div className="border-2 border-[#04b8b2] h-[300px] md:h-[250px]  rounded-3xl flex items-center justify-center  bg-cover bg-center">
                    <img
                        src={myPic}
                            alt="Full Image"
                            className="w-full h-full object-cover  rounded-3xl"
                    />
                  </div>

                    <div className="px-[10px] md:py-1 flex  ">
                    <label>Name: </label>
                    <p className="md:px-[28px]">Emmanuel Victor</p>
                    </div>

                    <div className="px-[10px] md:py-1 flex  ">
                    <label>Phone: </label>
                    <p className="md:px-[24px]">+234806614327</p>
                    </div>

                    <div className="px-[10px] md:py-1 flex  ">
                    <label>Email: </label>
                    <p className="md:px-[35px]">ve48381@gmail.com</p>
                    </div>

                    <div className="px-[10px] md:py-1 flex  ">
                    <label>Git: </label>
                    <a href="https://github.com/gem870"><p className="md:px-[53px] transition-transform duration-500 ease-in-out transform hover:scale-110">gem870</p></a>
                    </div>

                    <div className="px-[10px] md:py-1 flex  ">
                    <label>LinkedIn: </label>
                     <a href="https://www.linkedin.com/in/chibuike-emmanuel-b8b29b269/"><p className="md:px-[15px] transition-transform duration-500 ease-in-out transform hover:scale-110">Chibuike (Victor) Emmanuel</p></a>
                    </div>
                    <br />

                    <div className="py-4">
                    <a 
                      href="Resume.pdf"
                      download="Emmanuel Victor"
                    ><button className="bg-[#1fa190]  p-1 rounded-md text-black transition-transform duration-500 ease-in-out transform hover:scale-110">Download Resume</button></a>
                    </div>

            </div>

                <div className="scroll-container p-2 border   border-gray-600 m-2  h-[200px] md:h-[500px] md:w-[1000px] rounded-md bg-[#000000] text-gray-500">
                    <p>I am a passionate and skilled web developer with over 2 years of experience specializing in the MERN stack (MongoDB, Express.js, React, and Node.js). My expertise lies in building dynamic, responsive, and scalable web applications that deliver a seamless user experience. I enjoy tackling complex problems and translating them into efficient, elegant code.

                        Throughout my career, I’ve worked on a variety of projects, from creating robust APIs to designing intuitive front-end interfaces. My strong foundation in JavaScript, combined with my knowledge of database management and server-side logic, allows me to develop end-to-end solutions that meet both user needs and business objectives.

                        I am always eager to learn and adapt to new technologies and methodologies, ensuring that my skillset stays relevant in the fast-paced world of web development. Whether I’m collaborating with a team or working independently, my goal is to contribute high-quality code that drives innovation and enhances user engagement.

                        When I’m not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or diving into a good book.

                        Let’s build something amazing together!
                   </p>
                    
                </div>

                <div className="border-b border-b-slate-700 m-4 md:w-[200px] text-gray-500">
                    <label >Skills:</label>
                    <ul className="text-[#10c2aa] ">
                        <li className="py-1 hover:shadow-custom transition-shadow duration-300 uppercase">Node.js/Net.js</li>
                        <li className="py-1 hover:shadow-custom transition-shadow duration-300 uppercase">React</li>
                        <li className="py-1 hover:shadow-custom transition-shadow duration-300 uppercase">TypeScript</li>
                        <li className="py-1 hover:shadow-custom transition-shadow duration-300 uppercase">css||tailwin||boostrap</li>
                        <li className="py-1 hover:shadow-custom transition-shadow duration-300 uppercase">Nosql(mongodb)</li>
                        <li className="py-1 hover:shadow-custom transition-shadow duration-300 uppercase">docker</li>
                        <li className="py-1 hover:shadow-custom transition-shadow duration-300 uppercase">mysql</li>
                        <li className="py-1 hover:shadow-custom transition-shadow duration-300 uppercase">redis</li>
                    </ul>
                </div>

           </div>
        </div>
       </div>
     ); 
}
 
export default About;