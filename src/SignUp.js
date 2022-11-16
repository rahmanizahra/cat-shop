import React from 'react'

export default function SignUp() {
  return (
    <>
    <div className='signup-container'>
     <h1>Sign Up</h1>
     <p>It is quick and easy</p>
     <hr/>
     <form>
      <input type="text" placeholder='Firstname'></input>
      <input type="text" placeholder='Lastname'></input>
      <input type="email"placeholder='Email'></input>
      <input type="password"placeholder='New password'></input>
      <label>Birthday</label>
      <input type="date"></input>
      <label>Famale</label>
      <input type="radio"></input>
      <label>Male</label>
       <input type="radio"></input>
       <label>Other</label>
      <input type="radio"></input>

     </form>

    </div>
    </>
  )
}
