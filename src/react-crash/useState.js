import React,{useState} from 'react'

const UseState = () => {
   const [counter, setCounter] = useState(0)
   const [text, setText] = useState(true)

   const onClick = () => {
       setCounter((prev) =>counter+1)
       setText(!text)
       console.log(text,counter);
   }

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={onClick}>change</button>
            {text && <h1>Hide and Show</h1>}
        </>
    )
}

export default UseState
