import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const Signup = () => {

    const [name , setName] = useState('');
    const [email, setEmail]= useState('');
    const [address, setAdd] = useState('');
    const [password , setPwd] = useState('');
    const navigate = useNavigate();

    const handleClick = async ()=>{
        let response = await fetch('https://gofood-api-fcp0.onrender.com/signup',{
            method:'POST',
            body:JSON.stringify({name, email, address, password}),
            headers:{
                'content-Type':'application/json'
            },
        })
        response = await response.json();
        console.log(response);
        if(response.success){
            toast.success('Registered Successfull');
            navigate('/login')

        }

    }

  return (
    <div className="template d-flex justify-content-center align-items-center">
                <div className="form_container  p-5 rounded bg-white">
                    <h3 className="text-center">Sign Up</h3>
                    {/* Name  */}
                    <div className="mb-2">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter Full Name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    {/* Email  */}
                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    {/* Address  */}
                    <div className="mb-2">
                        <label htmlFor="address">Address</label>
                        <input type="text" placeholder="Enter Your Address" className="form-control" value={address} onChange={(e) => setAdd(e.target.value)} />
                    </div>
                    {/* Password  */}
                    <div className="mb-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" className="form-control" value={password} onChange={(e) => setPwd(e.target.value)} />
                    </div>
                    {/* Button  */}
                    <div className="d-grid mt-2">
                        <button className="btn btn-primary" onClick={handleClick}>Sign Up</button>
                    </div>
                    <p className="text-end mt-1">
                        Already Registered? <Link to='/login' className="ms-2">Login</Link>
                    </p>

                </div>
            </div>
  )
}

export default Signup