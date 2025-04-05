import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './index.css'

const Api = () => {
const [data,setData] = useState([]);

useEffect(()=>{
    const fetchData = async ()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        // console.log(response);
        
        

        setData(response.data);
    }
        fetchData();
},[])

console.log(data);


  return (
    <div className='perent'>
        {data.map((item)=>(
            <div className="card">
                <p  key={item.id} className='name'>{item.name.charAt(0)}</p>
                

                <p  key={item.id}>{item.email}</p>
                <p  key={item.id}>{item.username}</p>
                <p  key={item.id}>{item.address.street}</p>
            </div>
        ))}
    </div>
      
   
  )
}

export default Api
