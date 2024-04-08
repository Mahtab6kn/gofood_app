import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPwd] = useState('');
  const navigate = useNavigate();

  const handleClick =async ()=>{
     
       let data = await fetch('https://gofood-api-fcp0.onrender.com/login',{
          method:'post',
          body:JSON.stringify({email, password}),
          headers:{
            'content-Type':'application/json'
          }
       })
       try{
           data = await data.json();
          //  console.log(data);
          if(data.success){
          //  console.log(JSON.stringify(data.user))
          localStorage.setItem('userEmail', email)
           localStorage.setItem('user',JSON.stringify(data))
           toast.success('Login Successfully',{
            bodyClassName:"toastSuccess"
           })
           navigate('/')
          }
          else{
            toast.error('Invalid Credentials',{
              bodyClassName:"toastError"
             })
          }
       }
       catch(e){
          toast.error('Invalid Credentials',{
            bodyClassName:"toastError"
          })
       }
    
  }

  return (
    <div className="template d-flex justify-content-center align-items-center">
      <div className="form_container  p-5 rounded bg-white">

        <h3 className="text-center">Login</h3>
                    {/* Email  */}
        <div className="mb-2">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter Email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
                    {/* Password  */}
        <div className="mb-2">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter Password" className="form-control" value={password} onChange={(e) => setPwd(e.target.value)} />
        </div>
        <div className="mb-2">
          <input type="checkbox" className="custom-control custom-checkbox" id='check' />
          <label htmlFor="check" className="custom-input-label ms-2">Remember me</label>
        </div>
                  {/* Button  */}
        <div className="d-grid">
          <button className="btn btn-primary" onClick={handleClick}>Login</button>
        </div>
        <p className="text-end mt-3">
          <Link to='/forgotPassword' className='me-5'>Forgot Password</Link>New User?<Link to='/signup' className="ms-2">Sign Up</Link>
        </p>

      </div>
    </div>

  )
}

export default Login