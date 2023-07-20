import { useState } from 'react';

export default function SingIn() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className='container mt-5'>
      <div className='row'>
     
        <form className='d-flex justify-content-center' > 
        
        <div class="col-md-9 rounded-3 w-50 h-100 " style={{ boxShadow:'3px 1px 20px black',marginLeft:'40px',padding:'80px',textAlign:"center" }}>
        <h1 >Sign Up</h1>
          
            <label htmlFor="email" className='mb-3 fs-5' style={{position:"relative",right:'43%'}}> Email </label><br />
            <input type="email" name="email" id="email" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-100 rounded-3 p-3 mb-3 ' style={{backgroundColor:"#F4FAFA", }}/><br/>
            <label htmlFor="password" className='mb-3 fs-4' style={{position:"relative",right:'39%'}}> Password </label><br/>
            <input type="password"  name="password" id="password" placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-100 rounded-3 p-3 mb-3'style={{backgroundColor:"#F4FAFA"}} /><br/>
            <div class="col-md-8 d-flex justify-content-center"x style={{position:'relative',left:'20%',top:'3%'}}>
        <button class="btn btn-primary custom-button w-50 p-2 bg-info d-flex justify-content-center text-dark fs-4">Sing Up</button>
      </div>
            
          </div>
        </form>
      </div>
    </div>
  );
}
