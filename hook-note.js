js counter 
------------------------

let counter = 0;

const onClick = ()=>{
    counter = counter + 1;
    console.log(counter);
}
return (
    <>
        <h1>{counter}</h1>
        <button onClick={onClick}>Increment</button>
    </>

