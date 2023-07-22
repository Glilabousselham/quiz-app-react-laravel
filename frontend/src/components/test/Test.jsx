import React, { useState } from 'react';
import { FaSistrix } from 'react-icons/fa';
import './test.css';

export default function Test() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <form>
        <div className="input-group">
          <div className=" rounded-3  p-3" > 
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            /><FaSistrix style={{ position: "relative", left:"75%",bottom:'55%'}} />
          </div>
          
          <div className="input-group-append" style={{ position: "relative", left: "40%", top: '20px' }}>
            <button className="btn btn   w-100 fs-6" type="submit" style={{ backgroundColor: "#7FDBFF", }}>create to test</button>
          </div>
        </div>
      </form>
      <table className="table mt-5">
        <thead>
          <tr className='bg-primary'>
            <th style={{ backgroundColor: "#7FDBFF" }} scope="col">id</th>
            <th style={{ backgroundColor: "#7FDBFF" }} scope="col">Name</th>
            <th style={{ backgroundColor: "#7FDBFF" }} scope="col">status</th>
            <th style={{ backgroundColor: "#7FDBFF" }} scope="col">resultat</th>
            <th style={{ backgroundColor: "#7FDBFF" }} scope="col">participans</th>
            <th style={{ backgroundColor: "#7FDBFF" }} scope="col">date</th>
            <th style={{ backgroundColor: "#7FDBFF" }} scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>HTML</td>
            <td>encours</td>
            <td>70%</td>
            <td>Walid</td>
            <td>07/12/2023</td>
            <td>
              <button type="button" className="btn btn-warning">Show</button>
              <button type="button" className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>CSS</td>
            <td>finish</td>
            <td>80%</td>
            <td>Adil</td>
            <td>05/12/2022</td>
            <td>
              <button type="button" className="btn btn-warning">Show</button>
              <button type="button" className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Php</td>
            <td>finish</td>
            <td>90%</td>
            <td>Glila</td>
            <td>7/11/2022</td>
            <td>
              <button type="button" className="btn btn-warning">Show</button>
              <button type="button" className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
