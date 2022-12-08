import React ,{useState} from 'react'

import axios from 'axios' 
import Dropdown from 'react-bootstrap/Dropdown';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { useNavigate } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';  
import Table from 'react-bootstrap/Table';
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

function Ticketform() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
Electronicsignature:undefined,
signaturedate:undefined

          });
       
          const navigate =useNavigate()
    
        
          const handleChange = (e) => {
            setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
          };
       
          const handleClick = async (e) => {
            e.preventDefault();
            
          const data = await axios.post(`http://localhost:5000/ticket/addticket`, credentials);
          console.log(data)
        navigate(`/ticketdetails/${data.data._id}`)
    }
  return (
    <div>
        <div class="uk-card uk-card-default uk-width-1-2@m container">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
            <h4 className='customer_summary'>Ticket Form</h4>
             
            </div>
        </div>
    </div>
   <div class="uk-card-body">
     <div className='customersform'>
        <div className="form-group">
          <p required className='form-label field'>RequestNumber <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="RequestNumber" onChange={handleChange}  type="Number" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Request Date <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="RequestDate" onChange={handleChange}  type="Date"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Ticket Number <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="TicketNumber" onChange={handleChange}  type="Number"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Date of Creation<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="DateofCreation" onChange={handleChange}  type="Date"  />
        </div>
    
        <div className="form-group">
        <p required className='form-label field'>Ticket Source<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <select className="form-select"  id="Ticketsource" onChange={handleChange}  type="text" >
          
            <option value="Call">Call</option>
            <option value="Email">Email</option>
            <option value="SMS">SMS</option>
            <option value="Whatsapp">Whatsapp</option>
            <option value="Website">Website</option> 
          </select>
        </div>
        
        <div className="form-group">
        <p required className='form-label field'>Priority<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <select className="form-select"  id="Priority" onChange={handleChange}  type="text" >
          
            <option value="Urgent">Urgent</option>
            <option value="Normal">Normal</option>
            
          </select>
        </div>
        <div className="form-group">
        <p required className='form-label field'>Status<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <select className="form-select"  id="TicketStatus" onChange={handleChange}  type="text" >
          
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
          <select className="form-select"  id="Ticketfor" onChange={handleChange}  type="text" >
          
            <option value="Company">Company</option>
            <option value="Customer">Customer</option>
            <option value="Other">Other</option>
            
          </select>
        </div>
        <div className="form-group">
          <p required className='form-label field'>Requested By <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="requestedby" onChange={handleChange}  type="text" />
        </div>
        <div className="form-group">
          <p required className='form-label field'>Name <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="Name" onChange={handleChange}  type="text" />
        </div>
        <div className="form-group">
          <p required className='form-label field'>Contact Person<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="contactperson" onChange={handleChange}  type="text" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Contact Number <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="contactnumber" onChange={handleChange}  type="Number" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>WhatsApp Number<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="whatsappnumber" onChange={handleChange}  type="Number" />
        </div>
      

       
        
        
      </div> 
      <div className='customersform1'>
      <div className="form-group">
        <p required className='form-label field'>Machine Details<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="MachineDetails" onChange={handleChange}  type="text" />
        </div>
        </div>S
      <div className='customersform2'>
      <div className="form-group">
          <p required className='form-label field'>Date of purchase <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="Dateofpurchase" onChange={handleChange}  type="Date" />
        </div>
      <div className="form-group">
        <p required className='form-label field'>Warranty Expiring <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="warrantyexpiring" onChange={handleChange}  type="Date"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Ticket Type<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <select className="form-select"  id="Tickettype" onChange={handleChange}  type="text" >
          
          <option value="completed">General support</option>
            <option value="Warranty Maintenance">Warranty Maintenance</option>
            <option value="Contract">Contract</option>
            <option value="Internal">Internal</option>
            <option value="Third party">Third party</option>
            <option value="New Project">New Project</option>
           </select>
        </div>
      </div>
      
   {/* <div className='ticketaccordion'>
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
        {/* <div className="form-group">
          <p required className='form-label field'>Contract Number <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="contractnumber" onChange={handleChange}  type="text" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Contract Detail <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="contractdetail" onChange={handleChange}  type="text"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Contract Type <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="contracttype" onChange={handleChange}  type="text"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Contract Ending On <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="contractendingon" onChange={handleChange}  type="text"  />
        </div>
        
       </div>
</div>
     </div>
           
           </Typography>
        </AccordionDetails>
      </Accordion>
   
   </div> */} 
{/* <div className='ticketaccordion'>
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
        {/* <div className="form-group">
          <p required className='form-label field'>Ticket Number <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="TicketNumber" onChange={handleChange}  type="Number" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Open Date <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="Opendate" onChange={handleChange}  type="Date"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Close Date <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="Closedate" onChange={handleChange}  type="Date"  />
        </div>
        
        <div className="form-group">
        <p required className='form-label field'>Status <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <select className="form-select"  id="Status" onChange={handleChange}  type="text" >
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
          <input className="form-control"  id="Contactperson" onChange={handleChange}  type="text" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Contact Number<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="ContactNumber" onChange={handleChange}  type="Number" />
        </div>
       
        
        
        
      </div> 
      <div className='customersform1'>
      <div className="form-group">
        <p required className='form-label field'>Project Detail <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="Projectdetails" onChange={handleChange}  type="text" />
        </div>
      <div className="form-group">
          <p required className='form-label field'>Location <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="Location" onChange={handleChange}  type="text" />
        </div>
      </div>
    
     </div> 
</div>
           
           </Typography>
        </AccordionDetails>
      </Accordion>
</div> */} 
<div className='customersform1'>
     {/* <input type="file" id="testfield" filename="testfield" accept="image/*"/> */}
        <div className="form-group">
          <p required className='form-label field'>Customer Complaint<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="customercomplaint" onChange={handleChange}  type="text" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Service Details <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="Servicedetails" onChange={handleChange}  type="text"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Remark <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="Remark" onChange={handleChange}  type="text"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>paymentterms<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <select className="form-select"  id="paymentterms" onChange={handleChange}  type="text" >
          <option value="Credit">Credit</option>
            <option value="Cash">Cash</option>
            <option value="30">30 days</option>
            <option value="60">60 days</option>
            <option value="90">90 days</option>
            <option value="120">120 days</option>
          
          </select>
        </div>
        </div>
        <button className="buttonsignature uk-button uk-button-primary" onClick={handleClickOpen}>Sign off</button>
     </div>
    
    
    
     
     <div class="uk-card-footer">
     <div className="customerformbutton">
     <Link to='/'><button className='Customerbutton uk-button uk-button-primary'>Back</button></Link>
     <button className='Customerbutton uk-button uk-button-primary'  onClick={handleClick}>Save</button>
    </div>
      
 
    
   
     </div>
    
</div>
<BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
         Electronic Signature
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <div className='customersform1'>
      <div className="form-group">
        <p required className='form-label field'>Ticket Number <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="TicketNumber" onChange={handleChange}  type="text" />
        </div>
      <div className="form-group">
          <p required className='form-label field'>Electronic Signature<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="Electronicsignature" onChange={handleChange}  type="text" />
        </div>
        <div className="form-group">
          <p required className='form-label field'>Date<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="signaturedate" onChange={handleChange}  type="Date" />
        </div>
      </div>
        </DialogContent>
        
      </BootstrapDialog> 
    </div>
  )
}

export default Ticketform