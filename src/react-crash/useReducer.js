import React, { useState, useReducer } from "react";

function reducer(state, action) {
 /*  switch(action.type){
            case "counter":
                return {counter:state.counter+1,text:state.text}
            case "hide":
                return {counter:state.counter,text:!state.text}
            default:
                return state;
        } */
  if (action.type == "counter") {
    return { counter: state.counter + 1, text: state.text };
  }
  if (action.type == "hide") {
    return { counter: state.counter, text: !state.text };
  }
  return state;
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0, text: false });

  // const [counter, setCounter] = useState(0)
  // const [text, setText] = useState(true)

  // const onClick = () => {
  //     setCounter((prev) =>counter+1)
  //     setText(!text)
  //     console.log(text,counter);
  // }

  return (
    <>
      <h1>{state.counter}</h1>
      <button onClick={()=>{
          dispatch({type:"hide"})
          dispatch({type:"counter"})
      }}>click</button>
      {state.text && <h1>Hide and Show</h1>}
    </>
  );
};

export default UseReducer;
