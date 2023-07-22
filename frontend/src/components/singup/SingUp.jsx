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
        <form className='d-flex justify-content-center'>
          <div className="col-md-9 col-lg-6 rounded-3 p-4" style={{ boxShadow: '3px 1px 20px black' }}>
            <h1 className="text-center">Sign Up</h1>
            <label htmlFor="fullName" className='mb-3 fs-4'> FullName </label>
            <input
              type="text"
              name="fullName"
              id='fullName'
              placeholder='Enter your FullName'
              value={Nom}
              onChange={(e) => setFullName(e.target.value)}
              className='w-100 rounded-3 p-3 mb-3'
              style={{ backgroundColor: "#F4FAFA" }}
            />
            <label htmlFor="email" className='mb-3 fs-4'> Email </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder='Enter your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-100 rounded-3 p-3 mb-3'
              style={{ backgroundColor: "#F4FAFA" }} />
            <label htmlFor="password" className='mb-3 fs-4'> Password </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder='Enter your Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-100 rounded-3 p-3 mb-3'
              style={{ backgroundColor: "#F4FAFA" }}
            />
            <div className="form-check mb-3">
              <input
                type="checkbox"
                name="acceptTerm"
                id="acceptTerm"
                checked={acceptterm}
                onChange={(e) => setAcceptterm(e.target.checked)}
                className="form-check-input"
              />
              <label htmlFor="acceptTerm" className="form-check-label">I accept the terms</label>
            </div>
            <div className="d-grid  w-50  ms-auto mb-3" style={{ position: 'relative', right: "22%", top: '20px' }}>
              <button className="btn btn-primary custom-button p-2 bg-info fs-4 text-dark" >Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}