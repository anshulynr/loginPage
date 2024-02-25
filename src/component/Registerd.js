import React from 'react'

export default function Registerd(props) {

  return (

    <div className="container card  box-container">
    <h1 className='text-center'>Registeration Form</h1>
    
    <form onSubmit={props.Submit}>
        <div className='form-group box' >
            <label>Name</label>
            <input type='text' name='Username' placeholder='Enter your name' className='form-control '/>
        </div>
        <div className='form-group box' >
            <label>Email</label>
            <input type='email' name='Useremail'placeholder='Enter your email' className='form-control '/>
        </div>
        <div className='form-group box' >
            <label>Password</label>
            <input type='password' name='password'placeholder='password'  className='form-control '/>
        </div>
        <button type='submit' className='btn btn-primary'>Register</button>
        <button type='button'>Show Password</button>
      
    </form>
  </div>



  )
};
