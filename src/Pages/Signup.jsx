import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase'
import '../Css/Signup.css'

function Signup() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const registerUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      alert("User Registered Successfully ") 
      navigate('/')
    const user = userCredential.user;
    // ...
  })
      .catch((error) => {
      alert("Wrong Credentials or User Already exists")
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }

  return (
    <>
          <div className="sign">
              
              <div className='fsign'>
                  <h1>Register Here</h1>
                  <div className='sicons'>
                      <img src="./nameCard.png" alt="" />
                      <input
                          value={name}
                          onChange={(event)=>{setName(event.target.value)}}
                          type="text"
                          placeholder='Enter your Full Name'
                          id='fname' />
                  </div>
                  
                  <div className='sicons'>
                      <img src="./user.png" alt="" />
                      <input
                          value={email}
                          onChange={(event)=>{setEmail(event.target.value)}}
                          type="email"
                          placeholder='Enter your Email'
                          id='nmail' />
                  </div>

                  <div className='sicons'>
                      <img src="./padlock.png" alt="" />
                      <input
                          value={password}
                          onChange={(event)=>{setPassword(event.target.value)}}
                          type="password"
                          placeholder='Enter your Password'
                          id='npw' />
                  </div>
                  <button onClick={registerUser} id='sbtn'>Register</button>

              <Link to='/' id='slink'>Already Registered go to LogIn</Link>
              </div>         
              
              
          </div>
    </>
  )
}

export default Signup
