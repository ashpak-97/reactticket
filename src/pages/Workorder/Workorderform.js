import React from 'react'
import  {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Workorderform() {
  const [credentials, setCredentials] = useState({
    TicketNumber:undefined,
    Projectdetails:undefined,
    workordernumber:undefined,
    Date:undefined,
    workorderstatus:undefined,
    workordertypes:undefined,
    AssignedBy:undefined,
    AssignedTo:undefined,
    Designation:undefined,
    Department:undefined,
    Reporttime:undefined,
    Reportdate:undefined,
    Latitude:undefined,
    Longitude:undefined,
    Complaintdetected:undefined,
    Commenttype:undefined,
   
    Remark:undefined,
    Exittime:undefined
      });
   
      const navigate =useNavigate()

    
      const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      };
   
      const handleClick = async (e) => {
        e.preventDefault();
        
      const res = await axios.post(`http://localhost:5000/workorder/postworkorder`, credentials);
      console.log(res)
    navigate(`/workorder`)
}



  return (
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
          <p required className='form-label field'>Ticket Number<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="TicketNumber" onChange={handleChange}  type="Number" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Project Details <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="Projectdetails" onChange={handleChange}  type="text"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'> Work Order Number <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="workordernumber" onChange={handleChange}  type="Number"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Work Order Status<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <select className="form-select"  id="workorderstatus" onChange={handleChange}  type="text" >
          
            <option value="open">Open</option>
            <option value="InActive">Assigned</option>
            <option value="InActive">Closed</option>
            <option value="InActive">Completed</option>
          </select>
        </div>
        <div className="form-group">
        <p required className='form-label field'>Work Order Type<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <select className="form-select"  id="workordertypes" onChange={handleChange}  type="text" >
          
            <option value="Preinstallation Visit">Preinstallation Visit</option>
            <option value="Delivery">Delivery</option>
            <option value="Installation">Installation</option>
            <option value="Training">Training</option>
            <option value="Preventive Maintenance">Preventive Maintenance</option>
          </select>
        </div>
        <div className="form-group">
        <p required className='form-label field'>AssignedBy<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="AssignedBy" placeholder='user' onChange={handleChange}  type="text" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Assigned To<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="AssignedTo"  placeholder='technician' onChange={handleChange}  type="text" />
        </div>


        <div className="form-group">
          <p required className='form-label field'>Designation <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="Designation" onChange={handleChange}  type="text" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Department <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="Department" onChange={handleChange}  type="text"  />
        </div>
        </div> 
      
      <div className='accordion'>
      <Accordion sx={{backgroundColor:'white'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography className='contctlist'>Report</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'rgba(255, 255, 255, 0.833)'}}>
          <Typography>
          <div className='customersform'>
      <div className="form-group">
        <p required className='form-label field'>Report Time <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="Reporttime" onChange={handleChange}  type="date"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Report Date<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="Reportdate" onChange={handleChange}  type="date"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Latitude<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="Latitude" onChange={handleChange}  type="text"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Longitude<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="Longitude" onChange={handleChange}  type="text"  />
        </div>
      </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      


      <div className='customersform1'>
       
        <div className="form-group">
          <p required className='form-label field'>Complaint Detected</p>
          <input className="form-control"  type="text"   id="complaintdetected" onChange={handleChange}/>
        </div>
        <div className="form-group">
        <p required className='form-label field'>Comment type<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <select className="form-select"  id="Commenttype" onChange={handleChange}  type="text" >
          
            <option value="">select</option>
            <option value="closeticket">Completed and Requesdted to Close Ticket</option>
            <option value="RecommendtootherDepartment">Recommend to other Department</option>
            <option value="SparePartsRequired">Spare Parts Required</option>
            
          </select>
        </div>
      
        <div className="form-group">
          <p required className='form-label field'>Remark</p>
          <input className="form-control"  type="text"   id="Remark" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <p required className='form-label field'>Exit time</p>
          <input className="form-control"  type="Date"   id="Exittime" onChange={handleChange}/>
        </div>


      </div>
     {/* <div className='accordion'>
      <Accordion sx={{backgroundColor:'white'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography className='contctlist'>Spare parts</Typography>
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
      <button className='Customerbutton uk-button uk-button-primary'>Add New</button>
      </div> */}
       
     </div>
     
     
     
     <div class="uk-card-footer">
     <div className="customerformbutton">
     <Link to='/'><button className='Customerbutton uk-button uk-button-primary'>Back</button></Link>
     <button className='Customerbutton uk-button uk-button-primary'  onClick={handleClick}>submit</button>
    </div>
      
 
    
   
     </div>
    
</div></div>
  )
}

export default Workorderform