import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Customerform from '../Customerform/Customerform'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from 'react-router-dom'
import './Customerdetail.css'
import Checkbox from '@mui/material/Checkbox';
import DialogContent from '@mui/material/DialogContent';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';  
import Contactform from './Contactform';
import Machineform from './Machineform';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
  

function Customerdetails() {



// /Contact popup.............................///

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
 

//contact checkbox and delete
const [ischecked, setIschecked] = React.useState('');

  const handleChange1 = (e) => {
    if(e.target.checked)
    {setIschecked(e.target.value)}
    else{
        setIschecked('')
    }
};
const alldelete=()=>{
axios.delete(`http://localhost:5000/contactlist/deletecontact/${ischecked}`)
setIschecked('')
  }


  //Machine popup.............................///

const [open2, setOpen2] = React.useState(false);

const handleClickOpen2 = () => {
  setOpen2(true);
};
const handleClose2 = () => {
  setOpen2(false);
};


//Machine checkbox and delete
  const [ischecked1, setIschecked1] = React.useState('');

  const handleChange2 = (e) => {
    if(e.target.checked)
    {setIschecked1(e.target.value)}
    else{
        setIschecked1('')
    }
};
  const alldelete1=()=>{
axios.delete(`http://localhost:5000/machine/deletemachine/${ischecked1}`)
setIschecked1('')
  }



  //Customer edit
    const [credentials, setCredentials] = useState({
        name: undefined,
     country:undefined,
     Status:undefined,
        contact:undefined,
        email:undefined,
        Address:undefined,
        contactperson: undefined,
        Whatsppnumber:undefined,
        city:undefined,
        state:undefined
        });
    const location =useLocation()
    const navigate =useNavigate()
    const userid = location.pathname.split("/")[2]
    const [data,Setdata]=useState('')

    useEffect(()=>{
        
        axios.get(`http://localhost:5000/customer/getcutomer/${userid}`).then(response=>{
          
            Setdata(response.data)
        })
    },[])


  //getallcontact


  const [contactdata,setContactdata]=useState()
  useEffect(()=>{
        
    axios.get(`http://localhost:5000/contactlist/allcontact/${data._id}`).then(response=>{
     
      setContactdata(response.data)
    })
})


   //getallmachine
 
   const [machinedata, setMachinedata]=useState()
 
   useEffect(()=>{
         
     axios.get(`http://localhost:5000/machine/allmachines/${data._id}`).then(response=>{
      console.log(response.data)
       setMachinedata(response.data)
     })
 })
    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        console.log(credentials)
      };

    const handleClick = async (e) => {
       
    e.preventDefault();
    const res = await axios.put(`http://localhost:5000/customer/editcustomer/${userid}`, credentials);
    console.log(res)
    navigate('/')
     }
    
    
  return (
  
    
    <div>
  
  {/* Cutomerdetails form */}

    <div className='customerform'><div class="uk-card uk-card-default uk-width-1-2@m container">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
        <h4 className='customer_summary'> Customer Details</h4>
             
            </div>
        </div>
    </div>
   <div class="uk-card-body">
     <div className='customersform'>
        <div className="form-group">
          <p required className='form-label field'>Cutomer Name <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  defaultValue={data.name}  id="name"   type="text" onChange={handleChange}/>
        </div>
        <div className="form-group">
        <p required className='form-label field'>Primary Email <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="email" defaultValue={data.email}  type="email"  />
        </div>
        <div className="form-group">
        <p required className='form-label field' >Type <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <select className="form-select" defaultValue={data.Status}  id="Type" onChange={handleChange}  type="text" >
          
            <option value="Active">Active </option>
            <option value="InActive">InActive</option>
            
          </select>
        </div>
        <div className="form-group">
        <p required className='form-label field'>Primary Contact Number <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="contact" defaultValue={data.contact}  type="Number" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Whatsppnumber Number <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="Whatsppnumber" defaultValue={data.Whatsppnumber}  type="Number" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Primary Contact Person <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="contactperson" defaultValue={data.contactperson}  type="text" />
        </div>
        
      </div> 
      <div className='customersform2'>
        <div className="form-group">
        <p required className='form-label field'>City <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="city" defaultValue={data.city} type="text"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>State <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="state" defaultValue={data.state}  type="text"  />
        </div>
        <div className="form-group">
          <p required className='form-label field '>country</p>
          <input className="form-control" id="country" defaultValue={data.country} type="text"  />
        </div>
        </div>
      <div className='customersform1'>
       
        <div className="form-group">
          <p required className='form-label field'>Address</p>
          <input className="form-control"  type="text" defaultValue={data.Address}   id="Address" />
        </div>
      </div>
     </div>
     <div >  
</div>

{/* contactaccordion */}


     <div className='accordion'>
      <Accordion sx={{backgroundColor:'white'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography className='contctlist'>Contact List</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'rgba(255, 255, 255, 0.833)'}}>
          <Typography>
          <div class="uk-overflow-auto tablecontact"  >
    <table class="uk-table uk-table-small uk-table-divider">
         <thead>
          <tr>
           <th>#</th>
            <th>Person</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
            
            
         </tr>
        </thead>
        <tbody>
       {contactdata && contactdata.map((row)=>{return(
      
        <tr key={row._id}>
        <td><Checkbox
        fontSize='14px'
           value={row._id}
          checked={row.ischecked}
          onChange={(e)=>{handleChange1(e)}}
          inputProps={{ 'aria-label': 'controlled' }}/></td>
         <td >{row.person}</td>
         <td>{row.designation}</td>
         <td>{row.email}</td>
         <td>{row.mobile}</td> 
        
        
        </tr>
       
   
   
  )})}  </tbody>
      </table>
</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div className='contactdeletediv'>
      <button class="uk-button uk-button-primary contactdelete"onClick={handleClickOpen} >Add contacts</button>
    
      {(ischecked)?  <button class="uk-button uk-button-danger contactdelete" onClick={alldelete}>Delete</button>:(<></>)}
      </div>
</div>
     


     {/* machineaccordion */}


     <div className='accordion'>
     <Accordion sx={{backgroundColor:'white'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography className='contctlist'>Machine List</Typography>
        </AccordionSummary>
        <AccordionDetails  sx={{backgroundColor:'rgba(255, 255, 255, 0.833)'}}> 
          <Typography>
          <div class="uk-overflow-auto tablecontact" >
    <table class="uk-table uk-table-small uk-table-divider">
        <thead>
            <tr>
            <th>#</th>
            <th>Machine Code</th>
            <th>Machine Serial No:</th>
            <th>Machine Details</th>
            <th>Machine Type</th>
            <th>Machine Location</th>
            <th>Address</th>
            <th>Purchase Date</th>
            <th>Warranty Remaining</th>
            <th>Primary Contact Person</th>
            <th>Email Id</th>
            </tr>
        </thead>
        <tbody>
           
            {machinedata && machinedata.map((row)=>{return(
    
    <tr>
    <td><Checkbox
       value={row._id}
      checked={row.ischecked1}
      onChange={(e)=>{handleChange2(e)}}
      inputProps={{ 'aria-label': 'controlled' }}/></td>
        <td>{row.machinecode}</td>
        <td>{row.machineserial}</td>
        <td>{row.machinetype}</td>
        <td>{row.machinedetail}</td>
        <td>{row.Location}</td>
        <td>{row.address}</td>
        <td>{new Date(row.purchaseddate).toDateString()}</td>
        <td>{row.warranty}</td>
        <td>{row.primaryperson}</td>
        <td>{row.email}</td>
      
    </tr>
   


)})} 
           
            
        </tbody>
    </table>
</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div className='contactdeletediv'>
      <button class="uk-button uk-button-primary contactdelete"onClick={handleClickOpen2} >Add Machines</button>
    
      {(ischecked1)?  <button class="uk-button uk-button-danger contactdelete" onClick={alldelete1}>Delete</button>:(<></>)}
      </div>
     <div class="uk-card-footer">

     <div className="customerformbuttons">
     <Link to='/'><button className='Customerbutton uk-button uk-button-primary'>Back</button></Link>
     <button className='Customerbutton uk-button uk-button-primary' onClick={handleClick} >Save</button>
    </div>
      
 
    
    </div>
     </div>
    
</div></div>
   
    {/* /******************contactpopup********************* */  }



    <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
         Add Contacts 
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Contactform data={userid}/>
        </DialogContent>
        
      </BootstrapDialog> 
        {/* /******************machinepopup********************* */  }
        <BootstrapDialog
        onClose={handleClose2}
        aria-labelledby="customized-dialog-title"
        open={open2}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose2}>
      Add Machines
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Machineform data={userid}/>
        </DialogContent>
        
      </BootstrapDialog></div>
  )
}

export default Customerdetails
