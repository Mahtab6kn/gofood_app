import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Forgotpassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handleClick = async ()=>{
        let data = await fetch('https://gofood-api-fcp0.onrender.com/forgot-password',{
          method:'POST',
          body:JSON.stringify({email}),
          headers:{
            'content-type':'application/json'
          }
        })
        try{
            data = await data.json();
            console.log(data)
            if(!data.status){
                alert('Email not Registered');
                navigate('/signup')
            } 
            else{
                alert('check your email to reset the password')
                navigate('/login')
            }
        }
        catch(e){
            console.log(e)
        }
    }
    return (
        <div className="template d-flex justify-content-center align-items-center vh-100 bg-primary">
            <div className="form_container  p-5 rounded bg-white">

                <h3 className="text-center">Fogot Password</h3>
                {/* Email  */}
                <div className="mb-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="d-grid">
                      <button className="btn btn-primary" onClick={handleClick}>Send</button>
                    </div>
            </div>
        </div>
    )
}

export default Forgotpassword;
