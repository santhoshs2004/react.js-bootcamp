import React,{ useState } from 'react';

const EmployeeDetail = (props) => {
    const[name, setName]=React.useState("");
    const[email, setEmail]=React.useState("");
    const[password, setPassword]=React.useState("");
    const handleData=(e)=>{
        e.preventDefault();
        console.log("Employee details are: ",{name},{email},{password});
        
    }
  return (
    <>

    <h1> Employee details using props</h1>
    <p> The name of the univeristy is {props.uni_name}</p>
    <p> the id of the employee is {props.emp_id}</p>
    <p> employee working in {props.emp_dept} department</p>
    <p> the employee is the master of {props.emp_course}</p>
    <ul>
      {Object.entries(props.student_marks).map(([key, value]) => (
        <li key={key}>
          <strong>{key}</strong> : {value}
          
        </li>
      ))}
    </ul> 
      <div className='EmployeeDetail'>
        <form onSubmit={handleData}>
          <div>
            <input type="text" id='name' placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
          </div> <br />
          <div>
            <input type="text" id='email' placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
          </div> <br />
          <div>
            <input type="password" id='phone' placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} /> 
          </div> <br />
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
             

      </div>
    </>
  )
}

export default EmployeeDetail;

