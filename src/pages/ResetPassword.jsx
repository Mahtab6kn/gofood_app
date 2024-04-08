import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ResetPassword = () => {
  
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const {token} = useParams();
    const handleClick = async ()=>{
        let data = await fetch('http://localhost:5000/reset-password/'+token,{
          method:'POST',
          body:JSON.stringify({password}),
          headers:{
            'content-type':'application/json'
          }
        })
        try{
            data = await data.json();
            console.log(data)
            // alert('password change successfully')
            navigate('/login')
        }
        catch(e){
            console.log(e)
        }
    }
    return (
        <div className="template d-flex justify-content-center align-items-center vh-100 bg-primary">
            <div className="form_container  p-5 rounded bg-white">

                <h3 className="text-center">Reset Password</h3>
                {/* Password  */}
                <div className="mb-2">
                    <label htmlFor="password">New Password</label>
                    <input type="password" placeholder="*******" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="d-grid">
                      <button className="btn btn-primary" onClick={handleClick}>Reset</button>
                    </div>
            </div>
        </div>
    )
}
  


export default ResetPassword