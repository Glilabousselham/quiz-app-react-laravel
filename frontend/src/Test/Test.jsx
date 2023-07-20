import React,{useState} from'react'
import{FaSistrix} from 'react-icons/fa'
export default function Test(){
const[search,setearch]=useState('')

return(
<div >
<form class="d-flex flex-row m-5 ">
<input type="search" id="search" name="search" onChange={(e)=>setearch(e.target.value)}  placeholder='search' className='w-25 p-2 rounded-3' /><FaSistrix style={{position:"relative",right:"2%",top:"13px",}}/>
<button class="btn btn custom-button  p-2  text-dark  " style={{backgroundColor:"#7FDBFF", position:'relative',left:"60%"}}>create to test</button>
</form>
<table className="table " >
  <thead >
    <tr className='bg-primary'>
      <th style={{backgroundColor:"#7FDBFF"}}scope="col" >id</th>
      <th  style={{backgroundColor:"#7FDBFF"}} scope="col">Name</th>
      <th  style={{backgroundColor:"#7FDBFF"}}scope="col">status</th>
      <th  style={{backgroundColor:"#7FDBFF"}}scope="col">resultat</th>
      <th  style={{backgroundColor:"#7FDBFF"}}scope="col">participans</th>
      <th  style={{backgroundColor:"#7FDBFF"}}scope="col">date</th>
      <th style={{backgroundColor:"#7FDBFF"}} scope="col">action</th>
      
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
      <td><button type="button" class="btn btn-warning">Show</button>
      <button type="button" class="btn btn-danger">Delete</button>
</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>CSS</td>
      <td>finish</td>
      <td>80%</td>
      <td>Adil</td>
      <td>05/12/2022</td>
      <td>    <button type="button" class="btn btn-warning">Show</button>
      <button type="button" class="btn btn-danger">Delete</button>

</td>
    </tr>
    
  </tbody>
</table>
</div>)}