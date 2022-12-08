import React from 'react'
// import Table from 'react-bootstrap/Table';
import axios from 'axios'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useEffect,useState} from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Customer.css'
import Table from "../../components/table/Table"
function Customer() {
  const [anchorEl, setAnchorEl] = React.useState()
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    const[Customer,setCustomer]=useState('')
    useEffect(() => {
        axios.get('http://localhost:5000/customer/getcutomer').then(res=>{
           
            setCustomer(res.data)
        })
   
      },[]);

      const[count,setCount]=useState('')
      useEffect(() => {
        axios.get('http://localhost:5000/customer/countcutomer').then(res=>{
           
            setCount(res.data)
        })
   
      },[]);

  return (
    <div className='customer'>
        <div class="uk-card uk-card-default uk-width-1-2@m container">
        <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto" className='customer_summaryhead'>
               <h4 className='customer_summary'>Customer Summary</h4>
            </div>
            <div className='customer_summary_content'>
                <div className='custommer_summary_box'>
                    <h2 className='number'>{count?count:0}</h2>
                    <p className='customersummary_para'>Total Customer </p>
                </div>
             
                <div className='custommer_summary_box'>
                    <h2 className='number'>7</h2>
                    <p className='customersummary_para1'>Active Customer</p>
                </div>
                <div className='custommer_summary_box'>
                    <h2 className='number'>7</h2>
                    <p className='customersummary_para2'>Inactive Customer</p>
                </div>
             
               
                
            </div>
         
        </div>
        <div>
       
     <Link to="/customerform">   <button className='Customerbutton uk-button uk-button-primary'>Add New Customer</button></Link>
     <button style={{marginRight:"20px"}} className='Customerbutton uk-button uk-button-primary'>Import New Customer</button>
     </div>
    </div>
    <div class="uk-card-body">
      <Table data={Customer}></Table>
    {/* <Table responsive className='tables'>
      <thead>
        <tr>
          <th>#</th>
          <th >Customer Name</th>
            <th>Primary Contact</th>
            <th>Primary Email</th>
            <th>Date Created</th>
           
            <th>Status</th>
            <th>Action</th>
            
           
           
       
        </tr>
      </thead>
      <tbody>
      {Array.from(Customer).map((row,index) =>{return(
      <tr>
            <td>{index+1}</td>
            <td><Link to={`/customerdetails/${row._id}`}>{row.name}</Link></td>
            <td>{row.contact}</td>
            <td>{row.email}</td>
            <td>{new Date(row.createdAt).toDateString()}</td>
            
            <td>{row.Status}</td>
           <td>   
           <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ArrowDropDownIcon/>
      </Button>

       </td> */}
            {/* <td>  <Link to={`/customerdetails/${row._id}`}>  <button className='buttonconsult1'>view</button> </td> */}
     
        {/* </tr>)})}
      </tbody>
    </Table> */}
    </div>
   
</div>
<Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
      <Link to='/form' >  <MenuItem style={{textDecoration:'none'}} onClick={handleClose}>Profile</MenuItem></Link>
        
      </Menu>
    </div>
  )
}

export default Customer