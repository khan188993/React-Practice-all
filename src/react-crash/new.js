import React,{useContext} from 'react'
import {AppContext} from './useCon'

const New = () => {

    // console.log(useContext(AppContext));
    const {number,name} = useContext(AppContext);

    return (
        <>
            <h1>New</h1>
            <h3>{`${name} ${number}`}</h3>
        </>
    )
}

export default New
