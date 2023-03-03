import React, {  useState } from 'react'


export default function Register(props){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [cpass,setCPass]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e);
    }
    return(
        <div className='form-container'>
        <h1>Sign Up</h1>
        <form action='/' method='post' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' className='form-control ' placeholder=' Enter your name' value={name}
        onChange={(e)=> setName(e.target.value)}></input>
    
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' className='form-control ' placeholder='Enter email id' value={email}
        onChange={(e)=> setEmail(e.target.value)}></input>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' className='form-control' placeholder='Enter password' value={pass}
        onChange={(e)=>setPass(e.target.value)}></input>
        <label htmlFor='cpassword'>Re-enter Password</label>
        <input type='cpassword' id='cpassword' className='form-control' placeholder='Re-enter password' value={cpass}
        onChange={(e)=>setCPass(e.target.value)}></input>
        <button type='submit' className='btn btn-primary' >Sign Up</button>
        </form>
        <p>If you already have an account, <button className='link' onClick={()=> props.onFormSwitch('login')}>Login</button></p>
  
        </div>
    )
}