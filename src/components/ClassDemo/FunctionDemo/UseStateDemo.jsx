import React ,{ useState }from 'react';

const UseStateDemo = () => {
    const [show, setShow] = React.useState(true);
  return (
    <>
    <h1> UseState Demo</h1>
    <p> This is a demo for useState </p>
    <button onClick={()=>setShow(!show)}>
        {show ? "Hide" : "Show"} Text
    </button>
    {show && <p> This is a toggle example</p>}
    
      
    </>
  );
}

export default UseStateDemo;
