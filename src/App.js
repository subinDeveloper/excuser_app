import axios from "axios";
import { useState } from "react";


function App() {
  const[excuse,setExcuse]=useState("")
  const fetchData = async (types)=> {
    const {data} = await axios.get(`https://excuser-three.vercel.app/v1/excuse/${types}`)
    setExcuse(data[0].excuse);
    
    
  }
  return (
    <div className="flex justify-center min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 flex-col items-center gap-16 ">
     
      <h1 className="text-red-700 text-4xl font-bold">Generate an excuse</h1>
<div className="flex flex-col gap-8">
<button onClick={()=>{fetchData("funny")}} className="px-8 text-white py-4 bg-yellow-400 rounded-md">Funny</button>
<button onClick={()=>{fetchData("developers")}} className="px-8 text-white py-4 bg-blue-400 rounded-md">Developer</button>
<button onClick={()=>{fetchData("office")}} className="px-8 text-white py-4 bg-green-400 rounded-md">Office</button>
</div>
<h1 className="text-3xl">{excuse}</h1>  
    </div>
  );
}

export default App;
