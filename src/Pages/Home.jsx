import React from 'react'
import '../Css/Home.css'
import { signOut } from 'firebase/auth';
import {auth} from '../Firebase'
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate()

  const logOut = () => {
    signOut(auth).then(() => {
      navigate("/")
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  }

  return (
    <>
          <div className="home">
              <div className="hhome">
          <h1 className="head">We Welcome you to Explore new world of tech</h1>
          <button onClick={logOut} id='hbtn'>Log-Out</button>
              </div>
          </div>
    </>
  )
}

export default Home
