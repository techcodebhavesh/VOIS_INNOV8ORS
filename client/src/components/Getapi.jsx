import { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/monokai.css";


import "./getapi.css";
import TextField from '@mui/material/TextField';

const Getapi = () => {
  // const codeRef = useRef(null);

  // useEffect(() => {
  //   hljs.highlightBlock(codeRef.current);
  // }, []);
  return (
    <div className='body-getapi'>

        <h1 className="heading-getapi" >
        Get-API key
        </h1>
        <p>To initialize the Generative Model in your web app, you'll first need to import the necessary components. Assuming you've set up your project and obtained your API key, you can proceed with the initialization process. Make sure to securely pass your API key to your app, avoiding any exposure in your version control system. Once you've obtained your API key, you can include it as a global constant in your code. Then, import the Generative Model module into your JavaScript file using the appropriate import statement.</p>
        <h2 style={{fontWeight:'800'}}>Go to User profile to get API key</h2>
        {/* <div className="textf-getapi">
          

        <pre>
      <code className="javascript" ref={codeRef}>
        {`
My api key`}
      </code>
    </pre>
        </div> */}
        
        <p> With the model imported, you're ready to initialize it within your application. This step is crucial as it prepares the model for subsequent API calls. Ensure that the initialization process is completed before attempting to generate text or engage in other interactions with the Gemini API.</p>

    </div>
  )
}

export default Getapi