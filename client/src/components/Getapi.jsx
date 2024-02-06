import React from 'react';
import "./getapi.css";
import TextField from '@mui/material/TextField';

const getapi = () => {
  return (
    <div className='body-getapi'>

        <h1 className="heading-getapi" >
        Get-API key
        </h1>
        <p>To initialize the Generative Model in your web app, you'll first need to import the necessary components. Assuming you've set up your project and obtained your API key, you can proceed with the initialization process. Make sure to securely pass your API key to your app, avoiding any exposure in your version control system. Once you've obtained your API key, you can include it as a global constant in your code. Then, import the Generative Model module into your JavaScript file using the appropriate import statement.</p>
        <div className="textf-getapi"><TextField
          id="outlined-textarea"
          label="Get API Key"
          placeholder="API Key"
          multiline
        /></div>
        
        <p> With the model imported, you're ready to initialize it within your application. This step is crucial as it prepares the model for subsequent API calls. Ensure that the initialization process is completed before attempting to generate text or engage in other interactions with the Gemini API.</p>

    </div>
  )
}

export default getapi