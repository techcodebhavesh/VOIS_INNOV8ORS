import React, {useRef, useEffect} from 'react';
import TextField from "@mui/material/TextField";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/monokai.css";
hljs.registerLanguage("javascript", javascript);

const Nodejsdoc = () => {
  const codeRef = useRef(null);
  const codeRef2 = useRef(null);

  useEffect(() => {
    hljs.highlightBlock(codeRef.current);
    hljs.highlightBlock(codeRef2.current);
  }, []);
  return (
    <div><div className="nodejs-impl">
    <h1>Innovator's API: Quickstart with NODE JS</h1>

    <p>
      Getting Started
      <br />
      Example API Request:
    </p>

    <br></br>
    <pre>
      <code className="javascript"  ref={codeRef2} style={{borderRadius:'10px',margin:'px'}}>
        {`
//Example API Request:
http://localhost/togemini/processall   

fetch("/api/togemini/processall", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({ data }),
})
//format of input in the  Request body
{
  "data": [
  {
      "ProductID": 1,
      "SKU": "",
      "ProductTitle": "INNOV8ORS",
      "ProductDescription": "INNOV8ORS",
      "ProductFeatures": "INNOV8ORS",
      "ProductInfo": "INNOV8ORS",
      "ProductImages": [
          "YOUR_IMAGE_INBASE64"
  ]
  }
  ]
  }
`}
      </code>
    </pre>

    <br />
    <h2>Example Response</h2>

    <pre>
      <code className="javascript"  ref={codeRef}>
        {`
{
  "data": {
  "1": {
      "title": {
          "rating": 1,
          "suggestion": "The title is not clear and concise. It does not convey the main purpose or essence of the content. It should be revised to be more informative and descriptive."
      },
      "description": {
          "rating": 5,
          "suggestion": "The description is clear and concise. It provides a brief yet comprehensive overview of the content, giving readers a clear understanding of what to expect."
      },
      "image": {
          "rating": 0,
          "suggestion": "The image is not relevant to the product. It is a generic image of a blue background with some blue shapes. It does not represent the product or its features. It should be replaced with a more relevant image that accurately represents the product."
      },
      "featuresAndBenefits": {
          "rating": 8,
          "suggestion": "The features and benefits section is well-written and informative. It enumerates the key attributes and advantages of the product, highlighting its value or usefulness. However, it could be improved by adding more details and examples to make it more comprehensive."
        },
        "additionalInformation": {
            "rating": 7,
            "suggestion": "The additional information section is informative and provides some useful details about the product. However, it could be improved by adding more information about the manufacturer, country of origin, and pricing."
        },
        "overallScore": {
            "rating": 5,
            "suggestion": "The overall score is 5. The product catalog is well-written and informative. However, it could be improved by revising the title to be more clear and concise, adding more details and examples to the features and benefits section, and adding more information to the additional information section."
        }
    }
  }
  }
  `}
      </code>
    </pre>

  </div></div>
  )
}

export default Nodejsdoc