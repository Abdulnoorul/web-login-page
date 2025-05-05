import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase'
import '../Css/Login.css'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const loginUser = () => {
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    navigate("/home")
    const user = userCredential.user;
    // ...
  })
            .catch((error) => {
      alert('Wrong Credentials or Account does NOt exist')
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }

  return (
    <>
          <div className="log">
              <div className='logto'>
                  <h1 id='lohHead'>Login</h1>
              <div className='louname'>
                    <img src="./user.png" alt="usericon" />
                    <input type="email"
                      value={email}
                      onChange={(event)=>{setEmail(event.target.value)}}
                      placeholder='Enter Email'
                      id='mail' />
              </div>

              <div className='lopw'>
                <img src="./padlock.png" alt="pwicon" />
                  <input
                      value={password}
                      onChange={(event)=>{setPassword(event.target.value)}}
                      type="password"
                      placeholder='Enter Password'
                      id='pw' />
              </div>
                            
              <button onClick={loginUser} id='lobtn'>Login</button>

              <Link to="/register" id='hype'>New User Signup </Link>
              </div>
               
          </div>
    </>
  )
}

export default Login
