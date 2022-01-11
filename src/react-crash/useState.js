import React from 'react'

const UseState = () => {

    // react don't increase js basic counter 
    let counter = 0;
    const onClick = ()=>{
        counter = counter + 1;
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
