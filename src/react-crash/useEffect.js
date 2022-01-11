import React,{useState,useEffect} from 'react'
// useEffect will run onetime or multiple if [] don't have or dependency be there 

const UseEffect = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState(true)
    useEffect(() => {
        console.log("running");
        
    },[text])

    const onClick = ()=>{
        setCount((prev)=>prev+1)
    }
    const onText = ()=>{
        setText((prev)=> !prev)
    }

    return (
        <>
            <h1>{count}</h1>
            {text && <h1>Text</h1>}
            <button onClick={onClick}>click</button>
            <button onClick={onText}>Text</button>
        </>
    )
}

export default UseEffect
