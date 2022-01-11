import React,{useState} from 'react'

const UseState = () => {

    const [counter, setCounter] = useState(1)
    const onClick = ()=>{
    //   setCounter(counter+1)
      setCounter((prevCounter)=>{ return prevCounter+1})
      console.log(counter);
    }
    return (
        <>
            <h1>{counter}</h1>
            <button onClick={onClick}>Increment</button>
        </>
    )
}

export default UseState
