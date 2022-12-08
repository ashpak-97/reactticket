import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {loadpermissiondata} from '../../Redux/permission/permissionslice'
import Checkbox from '@mui/material/Checkbox';
import { Box, Button, TextField } from "@mui/material";
import Header from '../Header'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './Permission.css'
function Permission() {
  const [credentials,setCredential]=useState({ 
    contact:undefined,
    Userrole:undefined
})
    console.log(credentials)
  const [role, setRole] = React.useState('');

  const handleChange = (e) => {
    console.log(e)
    setCredential((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setRole(e.target.value);
    
    
  };

    const dispatch = useDispatch();
    
    
    useEffect(()=>{
     axios.get('http://localhost:5000/staff/alluser').then((result)=>
        dispatch(loadpermissiondata(result.data)))
         
    },[])
    const data = useSelector((state) => state.data);
    console.log(data)
    const [ischecked1, setIschecked1] = React.useState('');

    const handleChange1 = (e) => {
      if(e.target.checked)
    
      {
        setCredential((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        setIschecked1(e.target.value)}
      else{
        setIschecked1('')
        setCredential('')
      }
     
  };
  const Editcontact=()=>{
axios.put('http://localhost:5000/staff/permission',credentials)
  }
  
   

  return (  

  
    <div>
       <Box m="20px">
    <Header title="SMTP Settings" subtitle="" />
    <FormControl variant="filled"  id="Userrole" name="Userrole" className="roleselector" sx={{ m: 1}}>
        <InputLabel id="Userrole" name="Userrole">Role</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="Userrole"
          name="Userrole" 
          onChange={handleChange}
          sx={{ gridColumn: "span 2"}}
         >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem id="Userrole" name="Userrole" value="Supervisor">Supervisor</MenuItem>
          <MenuItem  id="Userrole" name="Userrole" value="Technician">Technician</MenuItem>
          <MenuItem id="Userrole" name="Userrole" value="General">General</MenuItem>
          <MenuItem id="Userrole" name="Userrole" value="Admin">Admin</MenuItem>
        </Select>
      </FormControl>
      <Checkbox
        fontSize='14px'
           value={"edit"}
           id="contact"
          checked={ischecked1}
          onChange={(e)=>{handleChange1(e)}}
          inputProps={{ 'aria-label': 'controlled' }}/>
</Box>
<button onClick={Editcontact}>submit</button>
    </div>
  )
}

export default Permission