import React,{useState,createContext} from 'react'
import Login from './login'
import User from './user'
export const AppContext = createContext(null);
const UseContext = () => {
    const [user, setUser] = useState("User")
    return (
        <>
            <AppContext.Provider value={{user,setUser}}>
            <Login/>
            <User />
            </AppContext.Provider>
        </>
    )
}

export default UseContext

/* 
*)add createContext,
*)make AppContext = createContext = null this will be outer of component
*)Appcontext.provider value = {{pass,pass2 }}
*)child er bitor impornt appcontext and usecontext 
*) {user} = useContext(AppContext);

*/
