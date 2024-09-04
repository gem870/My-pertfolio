import menu from './assets/work station.jpg';
// import hamb from './assets/hamburger.png'
import useFetch from './useFetch';
import axios from "axios";
import { useQuery } from "react-query";
import Git from './assets/github.png'

const Project = () => {
// const{data: apiData, isPending, err_m} = useFetch('http://localhost:5000/projects');
const { isLoading, error, data } = useQuery("portfolio", () =>
    axios.get("projects.js")
      .then(response => {
        return response.data; 
      })
      .catch((error) => console.error("Error fetching portfolio:", error))
);

    return ( 
        <div>
            {data != undefined && data.length > 0 && data.map((item) => {
              
              return(
                  <div id='projects' className="text-white  flex flex-col items-center justify-center py-10 " key={item.id}>
              <div className="md:flex relative shadow-custom">
                
                  <div className=" h-[480px] w-[280px] md:w-[1000px] m-2 flex justify-end rounded-md">
  
                  <div className="flex items-center justify-center w-full h-[480px] bg-cover bg-center border rounded-md md:w-[1000px]">
                      <img
                           src={item.image}
                          alt="Full Image"
                          className="w-full h-full object-cover rounded-md"
                      />
                  </div>
  
  
                      <div className=" flex flex-col h-[480px] w-[480px]  md:max-w-[450px] absolute  bg-gray-900 bg-opacity-70 rounded-md ">
                        
                        <div>
                         <h2 className='font-bold text-[#c53d62] text-xl p-1 pt-3'>{item.title}</h2>
                         <div className='h-[330px]'>
                         <p className='text-gray-300 pl-4' dangerouslySetInnerHTML={{__html:item.body}}>
                        
                          </p>
                         </div>
                        </div>
  
                        <div className='p-4'>
                         <a href={item.link}><button className='bg-[#04b099] p-2 bg-opacity-60 hover:bg-opacity-90 rounded-md text-black transition-transform duration-500 ease-in-out transform hover:scale-110'>
                          <img src={Git} alt="" className='w-6' />
                          </button></a>
                       </div>
                     </div>
  
                  </div>
  
                  
              </div>
          </div>
              )
          })}
        </div>
     );
}
 
export default Project;