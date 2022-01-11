import React,{useState,useEffect} from 'react'
import axios from 'axios';

const UseEffectApi = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            setData(()=>response.data)
        })
    }, [])






    
    return (
        <>
          {
              data.map((value, index, array) => {
                  return <h1 key={value.id} >Name : {value.name}</h1>
              })
          }
        </>
    )
}

export default UseEffectApi
