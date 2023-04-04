import React from 'react'

export default function Login() {
  return (
    <div className='d-flex min-vh-100 flex-column justify-content-center align-items-center'>
        <div className="card login-card">
            <div className="card-header">Login</div>
            <div className="card-body">
                <form >
                   <div className="mb-3">
                    <label htmlFor=""  className='mb-0'>Username</label>
                     <input type="text" name="username" className='form-control' placeholder='username' id="" />
                   </div><div className="mb-3">
                    <label htmlFor="" className='mb-0'>Password</label>
                    <input type="password" className='form-control' name="password" placeholder='password' id="" />
                   </div>
                    <button className='btn btn-primary'>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}
