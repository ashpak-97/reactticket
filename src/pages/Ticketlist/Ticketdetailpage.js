
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
import Checkbox from '@mui/material/Checkbox';
import DialogContent from '@mui/material/DialogContent';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';  


function Ticketdetailpage() {
    const [credentials1, setCredentials1] = useState({
        TicketNumber:undefined,
        Opendate:undefined,
        Closedate:undefined,
        Status:undefined,
        Projectdetails:undefined,
        Contactperson:undefined,
        ContactNumber:undefined,
        Location:undefined
          });
                
    const handleChange1 = (e) => {
        setCredentials1((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        console.log(credentials1)
      };
    
    const [credentials, setCredentials] = useState({
        RequestNumber:undefined,
    Requestdate:undefined,
    TicketNumber:undefined,
    DateofCreation:undefined,
    
    Ticketsource:undefined,
    Ticketfor:undefined,
    requestedby:undefined,
    Priority:undefined,
    TicketStatus: undefined,
    Name:undefined,
    contactperson:undefined,
    contactnumber:undefined,
    whatsappnumber:undefined,
    MachineDetails:undefined,
   Dateofpurchase:undefined,
   warrantyexpiring:undefined,
   Tickettype:undefined,
   contractnumber:undefined,
   contractdetail:undefined,
   contractnumber:undefined,

   contracttype:undefined,
   contractendingon:undefined,
   Opendate:undefined,
   Closedate:undefined,
   Status:undefined,
Projectdetails:undefined,
Contactperson:undefined,
ContactNumber:undefined,
Location:undefined,
customercomplaint:undefined,
Servicedetails:undefined,
Remark:undefined,
paymentterms:undefined,

          });

          
    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        console.log(credentials)
      };
      const location =useLocation()
    
    const userid = location.pathname.split("/")[2]
    const navigate= useNavigate()
    const handleClick = async (e) => {
       
    e.preventDefault();
     const data = await axios.put(`http://localhost:5000/ticket/editticket/${userid}`, credentials);
    await axios.post("http://localhost:5000/project/postproject", credentials1)
    console.log(data)
    navigate('/ticket')
     }
     const [data,Setdata]=useState('')

     useEffect(()=>{
         
         axios.get(`http://localhost:5000/ticket/getticket/${userid}`).then(response=>{
           
             Setdata(response.data)
         })
     })
     
       
        
      
  return (
    <div> <div class="uk-card uk-card-default uk-width-1-2@m container">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
            <h4 className='customer_summary'>Ticket</h4>
             
            </div>
        </div>
    </div>
   <div class="uk-card-body">
     <div className='customersform'>
        <div className="form-group">
          <p required className='form-label field'>RequestNumber <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" defaultValue={data.RequestNumber}  id="RequestNumber" onChange={handleChange}  type="Number" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Request Date <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="RequestDate" defaultValue={data.RequestDate} onChange={handleChange}  type="Date"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Ticket Number <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="TicketNumber" defaultValue={data.TicketNumber} onChange={handleChange}  type="Number"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Date of Creation<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="DateofCreation" defaultValue={new Date(data.DateofCreation).toDateString()} onChange={handleChange}  type="text"  />
        </div>
    
        <div className="form-group">
        <p required className='form-label field'>Ticket Source<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <select className="form-select"  id="Ticketsource" defaultValue={data.Ticketsource}  onChange={handleChange}  type="text" >
          
            <option value="Call">Call</option>
            <option value="Email">Email</option>
            <option value="SMS">SMS</option>
            <option value="Whatsapp">Whatsapp</option>
            <option value="Website">Website</option> 
          </select>
        </div>
        
        <div className="form-group">
        <p required className='form-label field'>Priority<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <select className="form-select"  id="Priority" defaultValue={data.Priority} onChange={handleChange}  type="text" >
          
            <option value="Urgent">Urgent</option>
            <option value="Normal">Normal</option>
            
          </select>
        </div>
        <div className="form-group">
        <p required className='form-label field'>Status<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <select className="form-select"  id="TicketStatus" defaultValue={data.TicketStatus} onChange={handleChange}  type="text" >
          
          <option value="completed">completed</option>
            <option value="open">open</option>
            <option value="close">close</option>
            <option value="pending">pending</option>
            <option value="ongoing">ongoing</option>
            <option value="cancelled">cancelled</option>
          </select>
        </div>
        <div className="form-group">
        <p required className='form-label field'>Ticket For<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <select className="form-select"  id="Ticketfor" defaultValue={data.Ticketfor} onChange={handleChange}  type="text" >
          
            <option value="Company">Company</option>
            <option value="Customer">Customer</option>
            <option value="Other">Other</option>
            
          </select>
        </div>
        <div className="form-group">
          <p required className='form-label field'>Requested By <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="requestedby" defaultValue={data.requestedby && data.requestedby} onChange={handleChange}  type="text" />
        </div>
        <div className="form-group">
          <p required className='form-label field'>Name <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="Name" defaultValue={data.Name} onChange={handleChange}  type="text" />
        </div>
        <div className="form-group">
          <p required className='form-label field'>Contact Person<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="contactperson" defaultValue={data.contactperson} onChange={handleChange}  type="text" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Contact Number <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="contactnumber" defaultValue={data.contactnumber} onChange={handleChange}  type="Number" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>WhatsApp Number<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="whatsappnumber" defaultValue={data.whatsappnumber} onChange={handleChange}  type="Number" />
        </div>
      

       
        
        
      </div> 
      <div className='customersform1'>
      <div className="form-group">
        <p required className='form-label field'>Machine Details<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="MachineDetails" onChange={handleChange} defaultValue={data.MachineDetails}  type="text" />
        </div>
        </div>S
      <div className='customersform2'>
      <div className="form-group">
          <p required className='form-label field'>Date of purchase <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="Dateofpurchase" onChange={handleChange} defaultValue={data.Dateofpurchase} type="date" />
        </div>
      <div className="form-group">
        <p required className='form-label field'>Warranty Expiring <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="warrantyexpiring" onChange={handleChange} defaultValue={data.warrantyexpiring} type="text"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Ticket Type<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <select className="form-select"  id="Tickettype" onChange={handleChange} defaultValue={data.Tickettype}  type="text" >
          
          <option value="completed">General support</option>
            <option value="Warranty Maintenance">Warranty Maintenance</option>
            <option value="Internal">Internal</option>
            <option value="Third party">Third party</option>
            <option value="New Project">New Project</option>
           </select>
        </div>
      </div>
    {data.Tickettype==='Contract'? (<div className='ticketaccordion'>
   <Accordion sx={{backgroundColor:'white'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography className='contctlist'>Contract</Typography>
        </AccordionSummary>
        <AccordionDetails  sx={{backgroundColor:'rgba(255, 255, 255, 0.833)'}}> 
          <Typography>
          <div class="uk-card uk-card-default uk-width-1-2@m container">
  
   <div class="uk-card-body">
     <div className='customersform'>
     {/* <input type="file" id="testfield" filename="testfield" accept="image/*"/> */}
        <div className="form-group">
          <p required className='form-label field'>Contract Number <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="contractnumber" defaultValue={data.contractnumber} onChange={handleChange}  type="text" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Contract Detail <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="contractdetail" defaultValue={data.contractdetail} onChange={handleChange}  type="text"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Contract Type <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="contracttype" defaultValue={data.contracttype} onChange={handleChange}  type="text"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Contract Ending On <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="contractendingon" defaultValue={data.contractendingon} onChange={handleChange}  type="Date"  />
        </div>
        
       </div>
</div>
     </div>
           
           </Typography>
        </AccordionDetails>
      </Accordion>
   
   </div>):(<></>)}
  {data.TicketStatus==='open'?(<div className='ticketaccordion'>
<Accordion sx={{backgroundColor:'white'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography className='contctlist'>Project</Typography>
        </AccordionSummary>
        <AccordionDetails  sx={{backgroundColor:'rgba(255, 255, 255, 0.833)'}}> 
          <Typography>
          <div class="uk-card uk-card-default uk-width-1-2@m container">
    
   <div class="uk-card-body">
     <div className='customersform'>
     {/* <input type="file" id="testfield" filename="testfield" accept="image/*"/> */}
        <div className="form-group">
          <p required className='form-label field'>Ticket Number <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="TicketNumber" onChange={handleChange1} defaultValue={data.TicketNumber} type="Number" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Open Date <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="Opendate" onChange={handleChange1}  type="Date"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Close Date <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="Closedate" onChange={handleChange1}  type="Date"  />
        </div>
        
        <div className="form-group">
        <p required className='form-label field'>Status <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <select className="form-select"  id="Status" onChange={handleChange1}  type="text" >
          <option value="completed">completed</option>
            <option value="open">open</option>
            <option value="close">close</option>
            <option value="pending">pending</option>
            <option value="ongoing">ongoing</option>
            <option value="cancelled">cancelled</option>
          
          </select>
        </div>
        
        <div className="form-group">
        <p required className='form-label field'>Contact Person <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="Contactperson" onChange={handleChange1}  type="text" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Contact Number<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="ContactNumber" onChange={handleChange1}  type="Number" />
        </div>
       
        
        
        
      </div> 
      <div className='customersform1'>
      <div className="form-group">
        <p required className='form-label field'>Project Detail <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="Projectdetails" onChange={handleChange1}  type="text" />
        </div>
      <div className="form-group">
          <p required className='form-label field'>Location <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="Location" onChange={handleChange1}  type="text" />
        </div>
      </div>
    
     </div> 
</div>
           
           </Typography>
        </AccordionDetails>
      </Accordion>
</div>):(<></>)}

<div className='customersform1'>
     {/* <input type="file" id="testfield" filename="testfield" accept="image/*"/> */}
        <div className="form-group">
          <p required className='form-label field'> Customer Complaint<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="customercomplaint" onChange={handleChange} defaultValue={data.customercomplaint}  type="text" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Service Details <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="Servicedetails" onChange={handleChange}  defaultValue={data.Servicedetails}  type="text"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Remark <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="Remark" onChange={handleChange}  defaultValue={data.Remark}   type="text"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>paymentterms<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <select className="form-select"  id="paymentterms" onChange={handleChange} defaultValue={data.paymentterms} type="text" >
          <option value="Credit">Credit</option>
            <option value="Cash">Cash</option>
            <option value="30">30 days</option>
            <option value="60">60 days</option>
            <option value="90">90 days</option>
            <option value="120">120 days</option>
          
          </select>
        </div>
        </div>
     </div>
     
     
     
     <div class="uk-card-footer">
     <div className="customerformbutton">
     <Link to='/'><button className='Customerbutton uk-button uk-button-primary'>Back</button></Link>
     <button className='Customerbutton uk-button uk-button-primary'  onClick={handleClick}>submit</button>
    </div>
      
 
    
   
     </div>
    
</div>
    </div>
  )
}

export default Ticketdetailpage