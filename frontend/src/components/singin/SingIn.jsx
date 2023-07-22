import { useState } from 'react';


export default function SignIn() {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  return (
    <div className='container mt-5'>
      <div className='row'>
        <form className='d-flex justify-content-center'>
          <div className="col-md-4  rounded-3  p-2 " style={{ boxShadow: '3px 1px 20px black', height:'110%',width:"480px" }}>
            <div style={{position:"relative",}}>
            <h1 className="text-center mt-3">Sign In</h1>
           
            <label htmlFor="email" className=' fs-5 ml-4  mb-1 ' style={{position:"relative",left:'9%',}}> Email </label><br/>
            <input
              type="email"
              name="email"
              id="email"
              placeholder='Enter your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=' rounded-3   '
              style={{ backgroundColor: "#F4FAFA",position:"relative",left:'9%',padding:'11px',width:'85%' }} /><br/>
            <label htmlFor="password" className=' fs-5 mb-1 ' style={{position:"relative",left:'9%',}}> Password </label><br/>
            <input
              type="password"
              name="password"
              id="password"
              placeholder='Enter your Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=' rounded-3  mb-1'
              style={{ backgroundColor: "#F4FAFA",position:"relative",left:'9%',padding:'11px',width:'85%' }}
            /><br/>
            
            <div className="d-grid   ms-auto mb-5" style={{ position: 'relative', right: "5%", top: '20px',width:"85%" }}>
              <button className="btn btn-primary custom-button  bg-info fs-4 text-dark" >Sign In</button>
            </div>
          </div>
         </div> 
        </form>
      </div>
    </div>
  );
}