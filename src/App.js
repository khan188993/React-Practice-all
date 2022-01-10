import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App(){

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [allData, setAllData] = useState([])

  const submitForm = (e)=>{
    e.preventDefault();
    let newData = {email,password};
    setEmail("");
    setPassword("");
    setAllData([...allData,newData]);
    

    
  }
  





  return(
    <>
      <h1>Log IN form</h1>
      <form action="" onSubmit={submitForm}>
        email:<input value={email} type="email" onChange={(e)=>setEmail(e.target.value)}/><br></br>
        password:<input value={password} type="password" onChange={(e)=>setPassword(e.target.value)}/><br></br>
        <input type="submit" value="Login" /><br></br>
      </form>

      {
        allData.map((current)=>{

          return(
            <div class="showData">
             <h3>Email:{current.email}<br></br> Pass:{current.password}</h3>
          </div>
          )
          
        })
      }

     
     
      
    </>
  )
}

export default App;
