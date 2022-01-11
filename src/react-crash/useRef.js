import React,{useState,useRef} from 'react'
import New from './new'

const UseRef = () => {
    const [name, setName] = useState("")
    const inputRef = useRef()
    // console.log(inputRef);

    const onClick = () =>{
        setName(()=> inputRef.current.value)
        inputRef.current.value = "";
        inputRef.current.focus()
    }

    console.log(name);

    return (
        <>
          <h1>UseRef</h1>  
          <hr />

          <input type="text" ref={inputRef}/>
          <button onClick={onClick}>UseRef</button>
          <New inputRef ={inputRef} />
        </>
    )
}

export default UseRef
