import React,{useLayoutEffect,useEffect,useState} from 'react'

const UseLayoutEffect = () => {
    useEffect(() => {
        console.log("UseEffect 1")
    }, [])
    useLayoutEffect(() => {
        console.log("UseLayoutEffect")
    }, [])

    useEffect(() => {
        console.log("UseEffect 2")
    }, [])

    

    return (
        <div>
            <h1>UseLayoutEffect </h1>
            
        </div>
    )
}

export default UseLayoutEffect
