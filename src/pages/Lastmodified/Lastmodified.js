import React from 'react'
import axios from 'axios'
import  { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Button from '@mui/material/Button';
import Table from 'react-bootstrap/Table';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
function Lastmodified() {
    const [anchorEl, setAnchorEl] = React.useState()
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const [data ,Setdata]=useState('')

    useEffect(()=>{
        axios.get('http://localhost:5000/ticket/sortticket').then(response=>{
            console.log(response.data)
            Setdata(response.data)
        })
    })
  return (
    <div className='staff'> <div class="uk-card uk-card-default uk-width-1-2@m container">
    <div class="uk-card-header">
    <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-auto" className='customer_summaryhead'>
        <div>
        <Paper
                 component="form"sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250 }}> 
    
                <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search "
                 inputProps={{ 'aria-label': 'search google maps' }}
                 />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
               <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                 <SearchIcon />
                </IconButton></Paper>
        <Link to="/lastmodified">   <button className='Customerbutton uk-button uk-button-primary'>Last Modified</button></Link>
   <Link to="/ticketform">  <button style={{marginRight:'20px'}}  className='Customerbutton uk-button uk-button-primary'>Add New Ticket</button></Link>
   
   </div>
        </div>
        
     
    </div>
  
</div>
<div class="uk-card-body">
<Table responsive className='tables'>
  <thead>
    <tr>
      <th>Ticket Number</th>
      <th >Date Of Creation</th>
        <th>Status</th>
        <th>Date Closing</th>
        <th>Project</th>      
        <th>Ticket Type</th>
        <th>Customer</th>
        <th>MachineDetails</th>
       
        
       
       
   
    </tr>
  </thead>
  <tbody>
  {Array.from(data).map((row,index) =>{return(
  <tr>
        <Link to={`/ticketdetails/${row._id}`}><td>{row.TicketNumber}</td></Link>
        <td>{new Date(row.DateofCreation).toDateString()}</td>
        <td>{row.TicketStatus}</td>
        <td>{new Date(row.Closedate).toDateString()}</td>
        <td>{row.Projectdetails}</td>
        <td>{row.Tickettype}</td>
        <td>{row.Name}</td>
        <td>{row.MachineDetails}</td>
        <td> <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="buttontck"
      >
        <ArrowDropDownIcon/>
      </Button></td>
        
        
      
    
        
 
     </tr>)})} 
  </tbody>
</Table>
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
      <Link to='/ticketform' >  <MenuItem style={{textDecoration:'none'}} onClick={handleClose}>Add New Ticket</MenuItem></Link>
      <Link to='/form' >  <MenuItem style={{textDecoration:'none'}} onClick={handleClose}>Add document</MenuItem></Link>
      <Link to='/form' >  <MenuItem style={{textDecoration:'none'}} onClick={handleClose}>Add workorder</MenuItem></Link>
    
        
      </Menu>
    </div>
  )
}

export default Lastmodified