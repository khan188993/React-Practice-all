import React,{useState,useEffect} from 'react'
import useTitle from './useTitle';

const TitleCount = () => {
    const [count, setCount] = useState(0);
    // custom hook 

    useTitle(count);

    const onClick = () => {
        setCount((prev)=>prev+1)
    }



    return (
        <div>
            <h1>title {count}</h1>
            <button onClick={onClick}>titleCount</button>
        </div>
    )
}

export default TitleCount
