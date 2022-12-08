import React from 'react'
import  {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Contactform(props) {
  
    const [credentials, setCredentials] = useState({
        person: undefined,
        designation: undefined,
        email:undefined,
        mobile:undefined
          });
       
          const navigate =useNavigate()
    
        
          const handleChange = (e) => {
            setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
          };
       
          const handleClick = async (e) => {
            e.preventDefault();
            
          const res = await axios.post(`http://localhost:5000/contactlist/addcontact/${props.data}`, credentials);
          console.log(res)
        navigate(`/customerdetails/${props.data}`)
    }
  return (
    <div>
    <div className='container'>
        <div className='forms'>
       
        <input
          type="text"
          placeholder="Name"
          id="person"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="Designation"
          id="designation"
          onChange={handleChange}
          className="lInput"
        />
         <input
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
         <input
          type="text"
          placeholder="Mobile Number"
          id="mobile"
          onChange={handleChange}
          className="lInput"
        />
       
      <button onClick ={handleClick} className="buttonconsult">submit</button>
       
       </div>
    </div>
   
   
  </div>
  )
}

export default Contactform