import React from 'react';
import "./getapi.css";
import TextField from '@mui/material/TextField';

const getapi = () => {
  return (
    <div className='body-getapi'>

        <h1 className="heading-getapi" >
          hello 
        </h1>
        
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />

    </div>
  )
}

export default getapi