import React,{useContext} from 'react'
import {AppContext} from './useContext'

const User = () => {
    const {user} = useContext(AppContext);
    return (
        <>
            <h1>{user}</h1>
            
        </>
    )
}

export default User
