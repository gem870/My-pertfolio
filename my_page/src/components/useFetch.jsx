

import { useState, useEffect } from "react";

const useFetch = (url) => {
    const[data, setData] = useState(null);
    const[err_m, setErr_m] = useState(null);
    const[isPending, setIsPending] = useState(true);

useEffect(()=>{
       setTimeout(() => {
        fetch(url)
       .then(res =>{
        if(!res.ok){
            throw new Error("The url is not found.");
        }
        return res.json();
       }) 
       .then(data =>{
        setIsPending(false);
        setData(data);
       })
       .catch(err => {
            setErr_m(err.message);
       })
       }, 1000);
}, [url]);

    return {data, isPending, err_m}
}
export default useFetch;