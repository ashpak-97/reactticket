import React,{useState,useEffect} from 'react'
import {Link, Navigate, NavLink, useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import axios from 'axios'
import './project.css'
function Project() {
const navigate = useNavigate()
const[data,setData]=useState({})
useEffect(()=>{
    axios.get('http://localhost:5000/project/getproject').then(response=>{
        setData(response.data)
        console.log(response.data)
    })
},[])

  return (
    <div className='staff'><div class="uk-card uk-card-default uk-width-1-2@m container">
    <div class="uk-card-header">
    <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-auto" className='customer_summaryhead'>
            <h4 className='projecthead'> Projects</h4>
        <div>
        
   <Link to="/projectform">   <button className='Customerbutton uk-button uk-button-primary'>Add New Project</button></Link>
   <button style={{marginRight:"20px"}} className='Customerbutton uk-button uk-button-primary'>Lastmodified</button>
   </div>
        </div>
        
     
    </div>
  
</div>
<div class="uk-card-body">
<Table responsive className='tables'>
  <thead>
    <tr>
      <th>#</th>
      <th >Ticket Number</th>
        <th>Project Details</th>
        <th>Open date</th>
        <th>Status</th>      
        <th>Close date</th>
        <th>Action</th>
       
        
       
       
   
    </tr>
  </thead>
  <tbody>
  {Array.from(data).map((row,index) =>{return(
  <tr>
        <td>{index+1}</td>
        <td>{row.TicketNumber}</td>
        <td>{row.Projectdetails}</td>
        <td>{new Date(row.Opendate).toDateString()}</td>
        <td>{row.Status}</td>
        <td>{new Date(row.Closedate).toDateString()}</td>
        <td>   <Button
       
        onClick={()=>{axios.delete(`http://localhost:5000/project/deleteproject/${row._id}`)
        navigate(`/project`)
     }}
      >
        <DeleteIcon/>
      </Button>
     </td>
       
        
      
    
        
 
     </tr>)})} 
  </tbody>
</Table>
</div>

</div>
</div>
  )
}

export default Project
