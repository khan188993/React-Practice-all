import React,{useState,useEffect} from 'react'
import axios from 'axios';

const UseEffectApi = () => {
    const [data, setData] = useState("")
    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{ 
            setData(response.data)
        })
        
    },[data])
    return (
        <>
            {
                data.length > 0 && 
                data.map((value, index, array) => {
                    if(array.length>0){
                        return <>
                        <h1>{value.name}</h1>
                    <p>{value.id}</p>
                    </>
                    }
                })
                
            }
            <h1>UseEffectApi</h1>
        </>
    )
}

export default UseEffectApi
