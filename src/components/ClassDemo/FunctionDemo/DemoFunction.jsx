import React,{useState} from 'react';

const DemoFunction = () => {
    const[count,setCount]=useState(11)
    let fname="cristiano ronaldo";
    
  return (
    <>
    <h2> the goat of football is {fname}</h2>
    <p>likes {count}</p>
    <button onClick={()=>setCount(count+1)}>like</button>
    </>
  );
}

export default DemoFunction;
