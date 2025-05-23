import React from 'react';
import { useEffect } from 'react';

const ArrayDemo = () => {
    const cartoon=["jackie chan","bruce lee","jet li"];
    const users=[
        {name:"john",age:25},
        {name:"jane",age:30},
        {name:"doe",age:35}
    ];

    console.log(users);

    useEffect(()=> {
        fetch("https://api.npoint.io/91cd56555020f5a44119")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
    })

  return (
    <>
      <div>{cartoon.map((c,i)=>(
        <>
            <li key={i}>{c}</li>
        
        </>
      ))}</div>
<br /> 
      <div>
        {users.map((u)=>(
            <>
                <li>{u.name}</li>
            </>
        ))}
      </div>
    </>
  );
}

export default ArrayDemo;
