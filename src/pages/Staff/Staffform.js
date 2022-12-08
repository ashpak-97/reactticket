import React ,{useState} from 'react'
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import axios from 'axios' 
import { useNavigate } from 'react-router-dom'
function Staffform() {
  const [error,setError]=useState('')
    const [credentials, setCredentials] = useState({
        image:undefined,
        Firstname:undefined,
        Lastname:undefined,
        Designation:undefined,
        Department:undefined,
        Mobilenumber:undefined,
        WhatsappNumber:undefined,
        Email:undefined,
        Location:undefined,
        Usercode:undefined,
        Userrole:undefined,
        displayname:undefined,
        password:undefined,
        confirmpassword:undefined
          });
  const navigate = useNavigate()
   const handleChange = (e) => {
              setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
            };
     
  const handleClick = async (e) => {
             
          e.preventDefault();
          const data = await axios.post("http://localhost:5000/staff/adduser", credentials).then((res) =>  navigate(`/staffs`))
          .catch((error) => {
              if(error.response) setError(error.response.data);
            
          });
          
         
      }
  
  return (
    <div><div class="uk-card uk-card-default uk-width-1-2@m container">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
           
            <h4 className='customer_summary'>User details</h4>
            {(error)?(<div className="error">{error}</div>):<></>}
            </div>
        </div>
    </div>
   <div class="uk-card-body">
     <div className='customersform'>
     {/* <input type="file" id="testfield" filename="testfield" accept="image/*"/> */}
    
        <div className="form-group">
          <p required className='form-label field'>First Name <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="Firstname" onChange={handleChange}  type="text" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Last Name <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="Lastname" onChange={handleChange}  type="email"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Designation <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="Designation" onChange={handleChange}  type="email"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Department <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="Department" onChange={handleChange}  type="email"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Mobile Number <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="Mobilenumber" onChange={handleChange}  type="Number" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>WhatsApp Number<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="WhatsappNumber" onChange={handleChange}  type="Number" />
        </div>
        <div className="form-group">
          <p required className='form-label field'>Email <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="Email" onChange={handleChange}  type="email" />
        </div>
        <div className="form-group">
          <p required className='form-label field'>Location <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="Location" onChange={handleChange}  type="text" />
        </div>
        <div className="form-group">
          <p required className='form-label field'>User Code<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="Usercode" onChange={handleChange}  type="Number" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>User Role <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <select className="form-select"  id="Userrole" onChange={handleChange}  type="text" >
          <option value="Admin">Admin</option>
            <option value="Supervisor">Supervisor</option>
            <option value="General">General</option>
            <option value="Technician">Technician</option>
            
          </select>
        </div>
        
      </div> 
      <div className='customersform2'>
      <div className="form-group">
        <p required className='form-label field'>User Name <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="displayname" onChange={handleChange}  type="text"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Password<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="password" onChange={handleChange}  type="password"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'> Confirm Password<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="confirmpassword" onChange={handleChange}  type="password"  />
        </div>
        
      </div>


    
     </div>
     
     
     
     <div class="uk-card-footer">
     <div className="customerformbutton">
     <Link to='/staffs'><button className='Customerbutton uk-button uk-button-primary'>Back</button></Link>
     <button className='Customerbutton uk-button uk-button-primary'  onClick={handleClick}>submit</button>
    </div>
      
 
    
   
     </div>
    
</div>
</div>
  )
}

export default Staffform