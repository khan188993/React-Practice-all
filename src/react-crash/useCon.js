import React,{createContext} from 'react'
import New from './new'

export const AppContext = createContext(null)

const UseCon = () => {

    // console.log(AppContext)

    return (
        <AppContext.Provider value={{number:10,name:"arfan khan"}}>
            <h1>Usecontext</h1>
            <New/>
        </AppContext.Provider>
    )
}

export default UseCon
