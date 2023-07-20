import { useState } from 'react';
import './singup.css'
export default function SignUp() {
  const [Nom, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptterm, setAcceptterm] = useState('');

  return (
    <div className='container mt-5'>
      <div className='row'>
     
        <form className='d-flex justify-content-center' > 
        
        <div class="col-md-9 rounded-3 w-50  " style={{ boxShadow:'3px 1px 20px black',marginLeft:'40px',padding:'80px' }}>
        <h1 style={{position:"relative",left:'35%',bottom:'%'}}>Sign Up</h1>
          <label htmlFor="fullName"  className='mb-3 fs-4'> FullName </label><br/>
            
            <input type="text" name="fullName" id='fullName' placeholder='Enter your FullName' value={Nom} onChange={(e) => setFullName(e.target.value)} className='w-100 rounded-3 p-3 mb-3'style={{backgroundColor:"#F4FAFA"}} /><br/>
            <label htmlFor="email" className='mb-3 fs-4'> Email </label><br />
            <input type="email" name="email" id="email" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-100 rounded-3 p-3 mb-3' style={{backgroundColor:"#F4FAFA", }}/><br/>
            <label htmlFor="password" className='mb-3 fs-4'> Password </label><br/>
            <input type="password"  name="password" id="password" placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-100 rounded-3 p-3 mb-3'style={{backgroundColor:"#F4FAFA"}} /><br/>
            <input type="checkbox"  name="" id=""  onChange={(e) => setAcceptterm(e.target.value)} /><label> i accept the terms</label><br/>
            <div class="col-md-7 d-flex justify-content-center" style={{position:'relative',left:'20%',top:'3%'}}>
        <button class="btn btn-primary custom-button w-50 p-2 bg-info d-flex justify-content-center text-dark fs-5">Sing Up</button>
      </div>
            
          </div>
        </form>
      </div>
    </div>
  );
}
