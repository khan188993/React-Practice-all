import React, { useState, useReducer } from "react";
    // reducer call er sathei value cole asbe 
    const reducer = (state,action)=>{
        if(action.type =="increment"){
            console.log(state);
            return {count:state.count+1,text:state.text} 
        }
        if(action.type =="show"){
            console.log(state);
            return {count:state.count,text:true}
        }
        if(action.type ==="hide"){
            console.log(state);
            return {count:state.count,text:false}
        }

        return state;
    }
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer,{count:0,text:true})
  return (
    <>
    {state.text && <h1>Show Hide Text</h1>}
    <button onClick={()=>{
        dispatch({type:"show"})
    }}>Show</button>
    <button onClick={()=>{
        dispatch({type:"hide"})
    }}>Hide</button>
  
    <h1>{state.count}</h1>
    <button onClick={()=>{
        dispatch({type:"increment"})
    }}>Increment</button>

    </>
  );
};

export default UseReducer;
