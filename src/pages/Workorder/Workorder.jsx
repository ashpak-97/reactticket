import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import  { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
function Workorder() {
  
const[data,setData]=useState({})
useEffect(()=>{
    axios.get('http://localhost:5000/workorder/getworkorder').then(response=>{
        setData(response.data)
        console.log(response.data)
    })
},[])
const navigate =useNavigate()
  return (
    <div className='customer'>
    <div class="uk-card uk-card-default uk-width-1-2@m container">
    <div class="uk-card-header">
    <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-auto" className='customer_summaryhead'>
           <h4 className='customer_summary'>work order</h4>
        </div>
        
     
    </div>
    <div>
   
 <Link to="/workorderform">   <button className='Customerbutton uk-button uk-button-primary'>Add New Workorder</button></Link>

 </div>
</div>
<div class="uk-card-body">
<Table responsive className='tables'>
  <thead>
    <tr>
      
      <th >Ticket Number</th>
        <th>Project</th>
        <th>Work Order Number</th>
        <th>Date</th>
        
        <th>Action</th>
        
    </tr>
  </thead>
  <tbody>
  {Array.from(data).map((row,index) =>{return(
  <tr>
        
        <td><Link to={`/customerdetails/${row._id}`}>{row.TicketNumber}</Link></td>
        <td>{row.Projectdetails}</td>
        <td>{row.workordernumber}</td>
        <td>{new Date(row.Date).toDateString()}</td>
     
       
        
       <td>   
       <Button
       
        onClick={()=>{axios.delete(`http://localhost:5000/workorder/workorder/${row._id}`)
      navigate('/workorder')}}
      >
        <DeleteIcon/>
      </Button>
   </td>
        {/* <td>  <Link to={`/customerdetails/${row._id}`}>  <button className='buttonconsult1'>view</button> </td> */}
 
    </tr>)})}
  </tbody>
</Table>
</div>

</div>

</div>
  )
}

export default Workorder