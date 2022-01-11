import React, { useState,useRef,useEffect } from "react";
import "../App.module.css";

//get localstorage items  
const getLocalItems = () =>{
  let list = JSON.parse(localStorage.getItem('list'));
  return list.length>0 ? list: [];
}

const Todo = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useState(getLocalItems());
  const inputRef = useRef(null)
  //local storage use effect 
  useEffect(() => {
    localStorage.setItem("list",JSON.stringify(items));
  }, [items])

  //ON Change 
  const onChange = (event) => {
    setItem(event.target.value);
  };

  //Add Items
  const AddItems = () => {
    item && setItems([...items, item]);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  //remove items
  const removeItems = (index) => {
      let newItems = items.filter((item,id) => {
          return id !==index;
      });
      setItems(newItems)
  };
  

  // clear items
  const ClearItems = () => {
      setItems([]);
  };

  return (
    <>
      <div className="main">
        <h1>Todo Project</h1>
        <input type="text" onChange={onChange} ref={inputRef}/>
        <button onClick={AddItems}>Add</button>
        <div>
          {items.map((element, index) => {
            return (
              <p key={index}>
                {element} <button onClick={() => removeItems(index)}>Remove</button>
              </p>
            );
          })}
        </div>
        <button onClick={ClearItems}>Clear All</button>
      </div>
    </>
  );

  
};

export default Todo;
