import React from 'react'
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../Header";
import { useState } from "react";
import axios from 'axios'
function Email() {
    const [credentials, setCredentials] = useState({
        Emailencryption:undefined,
        SMTPhost:undefined,
        SMTPport:undefined,
        SMTPusername:undefined,
        SMTPpassword:undefined,
        BCCallemails:undefined,
        Electronicsignt:undefined,

          });
 
   const handleChange1 = (e) => {
              setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
            };
     
  const handleClick = async (e) => {
             
          e.preventDefault();
          const data = await axios.post("http://localhost:5000/email/postemail", credentials);
          console.log(credentials)
          
          
      }
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
      console.log(values);
    };

  return (
    <Box m="20px">
    <Header title="SMTP Settings" subtitle="" />

    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={checkoutSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
       handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <TextField
              fullWidth
              variant="filled"
              type="text"
              id='Emailencryption'
              label="Email Encryption"
              onBlur={handleBlur}
              onChange={(e)=>{
                handleChange(e);handleChange1(e)
              }}
              value={values.Emailencryption}
              name="Emailencryption"
              error={!!touched.Emailencryption && !!errors.Emailencryption}
              helperText={touched.Emailencryption && errors.Emailencryption}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="SMTP Host"
              id="SMTPhost"
              onBlur={handleBlur}
              onChange={(e)=>{
                handleChange(e);handleChange1(e)
              }}
              value={values.SMTPhost}
              name="SMTPhost"
              error={!!touched.SMTPhost && !!errors.SMTPhost}
              helperText={touched.SMTPhost && errors.SMTPhost}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="SMTP Port"
              id="SMTPport"
              onBlur={handleBlur}
              onChange={(e)=>{
                handleChange(e);handleChange1(e)
              }}
              defaultValue={values.SMTPport}
              name="SMTPport"
              error={!!touched.SMTPport && !!errors.SMTPport}
              helperText={touched.SMTPport && errors.SMTPport}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="SMTP Username"
              onBlur={handleBlur}
              id="SMTPusername"
              onChange={(e)=>{
                handleChange(e);handleChange1(e)
              }}
              defaultValue={values.SMTPusername}
              name="SMTPusername"
              error={!!touched.SMTPusername && !!errors.SMTPusername}
              helperText={touched.SMTPusername && errors.SMTPusername}
              sx={{ gridColumn: "span 4" }}
            />
           
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="SMTP Password"
              id="SMTPpassword"
              onBlur={handleBlur}
              onChange={(e)=>{
                handleChange(e);handleChange1(e)
              }}
              defaultValue={values.SMTPpassword}
              name="SMTPpassword"
              error={!!touched.SMTPpassword && !!errors.SMTPpassword}
              helperText={touched.SMTPpassword && errors.SMTPpassword}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="BCC All Emails To"
              onBlur={handleBlur}
              onChange={(e)=>{
                handleChange(e);handleChange1(e)
              }}
              defaultValue={values.BCCallemails}
              name="BCCallemails"
              id="BCCallemails"
              error={!!touched.BCCallemails && !!errors.BCCallemails}
              helperText={touched.BCCallemails && errors.BCCallemails}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              id="Electronicsign"
              label="Electronic Signature"
              onBlur={handleBlur}
              onChange={(e)=>{
                handleChange(e);handleChange1(e)
              }}
              defaultValue={values.Electronicsign}
              name="Electronicsign"
              
              error={!!touched.Electronicsign && !!errors.Electronicsign}
              helperText={touched.Electronicsign&& errors.Electronicsign}
              sx={{ gridColumn: "span 4" }}
            />
          </Box>
          <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit" onClick={handleClick} color="secondary" variant="contained">
              Save
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  </Box>
  )
}
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
    Emailencryption: yup.string().email("invalid email").required("required"),
    SMTPhost: yup.string().required("required"),
    SMTPport: yup.string().required("required"),

    SMTPusername: yup.string().required("required"),
  
    BCCallemails: yup.string().required("required"),
    Electronicsign: yup.string().required("required"),

});
const initialValues = {
    Emailencryption:'',
    SMTPhost:"",
    SMTPport:"",
    SMTPusername:"",
    SMTPpassword:"",
    BCCallemails:"",
    Electronicsign:""
};
export default Email