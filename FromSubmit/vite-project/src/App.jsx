import { useState } from 'react'

function App() {

  const [LoginData,setLoginData]=useState({FastName:'...',LastName:'...',Email:'...',Pass:'...'})

  const inputOnChange=(key,value)=>{
    setLoginData(LoginData=>({
      ...LoginData,[key]:value
    }))
  }

  return (
    <>
      
      <section style={{backgroundColor:'yellow'}}>
        <ul>
          <li>FastName: {LoginData.FastName} </li>
          <li>LastName: {LoginData.LastName}</li>
          <li>Email: {LoginData.Email}</li>
          <li>Pass: {LoginData.Pass}</li>
        </ul>
        {/* <form action="" onSubmit={(e)=>{e.preventDefault()}}>
          <input onChange={(e)=>{setLoginData(LoginData=>({...LoginData,"FastName":e.target.value}))}} type="text" placeholder='FastName' /><br/><br/>
          <input onChange={(e)=>{setLoginData(LoginData=>({...LoginData,"LastName":e.target.value}))}} type="text" placeholder='LastName' /><br/><br/>
          <input onChange={(e)=>{setLoginData(LoginData=>({...LoginData,"Email":e.target.value}))}} type="email" placeholder='Email' /><br/><br/>
          <input onChange={(e)=>{setLoginData(LoginData=>({...LoginData,'Pass':e.target.value}))}} type="pass" placeholder='Pass' /><br/><br/>
          <button>Submit</button>
        </form> */}

        <form action="" onSubmit={(e)=>{e.preventDefault()}}>
          <input onChange={(e)=>{inputOnChange('FastName',e.target.value)}} type="text" placeholder='Your Fast Name?' /><br /><br />
          <input onChange={(e)=>{inputOnChange('LastName',e.target.value)}} type="text" placeholder='Your Last Name?' /><br /><br />
          <input onChange={(e)=>{inputOnChange('Emainl',e.target.value)}} type="text" placeholder='Your Email Name?' /><br /><br />
          <input onChange={(e)=>{inputOnChange('Pass',e.target.value)}} type="text" placeholder='Your Pass?' /><br /><br />
          <button>Submit</button>
        </form>
      </section>
    </>
  )
}

export default App
