import { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='container mt-5'>
      <div className='row'>
        <form className='d-flex justify-content-center'>
          <div className="col-md-9 col-lg-6 rounded-3 mx-auto" style={{ boxShadow: '3px 1px 20px black', padding: '80px', textAlign: "center" }}>
            <h1>Sign Up</h1>
            <label htmlFor="email" className=' fs-5  d-flex text-end'>Email</label><br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder='Enter your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-100 rounded-3 p-3 mb-3'
              style={{ backgroundColor: "#F4FAFA" }}
            /><br />
            <label htmlFor="password" className='* fs-5  d-flex text-end'>Password</label><br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder='Enter your Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-100 rounded-3 p-3 mb-3'
              style={{ backgroundColor: "#F4FAFA" }}
            /><br />
            <div className="d-grid  w-50  ms-auto" style={{position:'relative',right:"22%",top:'20px'}}>
              <button className="btn btn-primary custom-button p-2 bg-info fs-5 text-dark" >Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
