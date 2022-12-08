import React from 'react'
import  {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Machineform(props) {
    const [credentials, setCredentials] = useState({
     
        machinecode: undefined,
        machineserial: undefined,
        machinetype:undefined,
        machinedetail:undefined,
        Location:undefined,
        address :undefined,
        purchaseddate:undefined,
        warranty:undefined,
        primaryperson:undefined,
        email:undefined
       
          });
       
          const navigate =useNavigate()
    
        
          const handleChange = (e) => {
            setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
            e.target.reset()
          };
       
          const handleClick = async (e) => {
            e.preventDefault();
            
          const res = await axios.post(`http://localhost:5000/machine/addmachine/${props.data}`, credentials);
          console.log(res)

          
       
    }
  return (
    <div>
    <div className='container'>
        <div className='forms'>
      
     
       
        <input
          type="Number"
          placeholder="Code"
          id="machinecode"
          onChange={handleChange}
          className="lInput"
        />
         <input
          type="Number"
          placeholder="Serial No:"
         id= "machineserial"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="Type"
          id="machinetype"
          onChange={handleChange}
          className="lInput"
        />
        <input
      type="text"
      placeholder="Machine details"
      id="machinedetail"
      onChange={handleChange}
      className="lInput"
    />
        
         <input
          type="text"
          placeholder="Address"
          id="address"
          onChange={handleChange}
          className="lInput"
        />
         <input
          type="Date"
          placeholder="Purchased Date"
          id="purchaseddate"
          onChange={handleChange}
          className="lInput"
        />
         <input
          type="text"
          placeholder="Warranty"
          id="warranty"
          onChange={handleChange}
          className="lInput"
        />
         <input
          type="text"
          placeholder="Primary Person"
          id="primaryperson"
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
       
      <button onClick ={handleClick} className="buttonconsult">submit</button>
       
       </div>
  </div>
  </div>
 );
}

export default Machineform