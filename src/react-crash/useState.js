import React,{useState} from 'react'

const UseState = () => {
    const [name, setName] = useState("")
    // console.log(useState(name));
    const onChange = (event) =>{
        console.log(event.target);
        console.log(event.target.type);
        console.log(event.target.value);
        
        let inputValue = event.target.value;
        setName(inputValue)
        console.log(inputValue);
    }
    return (
        <>
            <h1>{name}</h1>
            <input type="text" value={name} onChange={onChange}/>
        </>
    )
}

export default UseState
