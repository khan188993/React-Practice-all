import React,{useLayoutEffect,useEffect,useRef} from 'react'

const UseLayoutEffect = () => {
    const inputRef = useRef(null)
    useEffect(() => {
        console.log(inputRef.current.value="arfan khan")
    }, [])
    useLayoutEffect(() => {
        console.log(inputRef.current.value)
    }, [])

    

    return (
        <div>
            <h1>UseLayoutEffect </h1>
            <input type="text" value="Pedro" ref={inputRef}/>
            
        </div>
    )
}

export default UseLayoutEffect
