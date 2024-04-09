import React, { useState } from 'react';

const App = () => {

  const [LoginData,setLoginData]=useState({FastName:"...",LastName:'...',email:'...',pass:'...'})


  const InputOnchange=(key,value)=>{
    setLoginData(LoginData=>({
      ...LoginData,[key]:value
    }))
  }
  
  
  return (
    <div>
      <ul>
        <li>FastName: {LoginData.FastName}</li>
        <li>LastName: {LoginData.LastName}</li>
        <li>Email: {LoginData.email}</li>
        <li>Pass: {LoginData.pass}</li>
      </ul>
       <form action="" onSubmit={(e)=>{e.preventDefault(), alert(JSON.stringify(LoginData))}}>
          <input onChange={(e)=>{InputOnchange('FastName',e.target.value)}} type="text" placeholder='Fast Name' /><br/><br/>

          <input onChange={(e)=>{InputOnchange('LastName',e.target.value)}} type="text" placeholder='Last Name' /><br/><br/>

          <input onChange={(e)=>{InputOnchange('email',e.target.value)}} type="text" placeholder='Email' /><br/><br/>

          <input onChange={(e)=>{InputOnchange('pass',e.target.value)}} type="text" placeholder='pass' /><br /><br />

          <button>submit</button>
       </form>

    </div>
  );
};

export default App;