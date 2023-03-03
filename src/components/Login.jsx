import React, {  useState } from 'react'


export default function Login(props){

    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");


    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e);
    }
    return(
        <div className='form-container'>
        <h1>Login</h1>
        <form action='/' method='post' onSubmit={handleSubmit}>
        <label htmlFor='email'><b>Email</b></label>
        <input type='email' id='email' className='form-control ' placeholder='Enter email id' value={email}
        onChange={(e)=> setEmail(e.target.value)}></input>
        <label htmlFor='password'><b>Password</b></label>
        <input type='password' id='password' className='form-control' placeholder='Enter password' value={pass}
        onChange={(e)=>setPass(e.target.value)}></input>
        <button type='submit' className='btn btn-primary '><b>Login</b></button>
        </form>

        <p>If you don't have an account, <button className='link' onClick={()=>props.onFormSwitch('register')}>Sign Up</button></p>
            
        </div>
    )
}