import React,{useState,useMemo} from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0);

    const onClick = () =>{
        setCount((prev)=>prev+1)
    }
    let loop = 5;
    const getDisplayFunction = useMemo(() => display(loop),loop)

    function display(loop){
        for (let index = 0; index < loop; index++) {
            console.log(index);
            
        }
    }

    getDisplayFunction(loop)




    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onClick}>Incre</button>
        </div>
    )
}

export default UseMemo
