import React from 'react';
import TextField from "@mui/material/TextField";

const Nodejsdoc = () => {
  return (
    <div><div className="nodejs-impl">
    <h1>Innovator's API: Quickstart with NODE JS</h1>

    <p>
      Getting Started
      <br />
      Example API Request:
    </p>

    <br></br>
    <TextField
      disabled
      id="outlined-basic"
      label="Example API Request:"
      defaultValue='
http://localhost/togemini/processall   

fetch("/api/togemini/processall", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({ data }),
})
'
      variant="filled"
      multiline
      sx={{
        "& .MuiInputLabel-root": {
          color: "blue", // Change color as needed
        },
      }}
      style={{ width: "80%", margin: "3%" ,
      color:" rgba(0, 0, 0, 0.38)",
}}
    />

    <TextField
      disabled
      id="outlines-basic"
      label="\format of input in the  Request body    "
      defaultValue='
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

'
      variant="filled"
      multiline
      sx={{
        "& .MuiInputBase-input": {
          color: "black", // Change color as needed
        },
        "& .MuiInputLabel-root": {
          color: "blue", // Change color as needed
        },
      }}
      style={{ width: "80%", margin: "3%" }}
    />

    <TextField
      disabled
      id="outlines-basic"
      label="EXAMPLE API RESPONSE:
"
      defaultValue='
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



'
      variant="filled"
      multiline
      sx={{
        "& .MuiInputBase-input": {
          color: "black", // Change color as needed
        },
        "& .MuiInputLabel-root": {
          color: "blue", // Change color as needed
        },
      }}
      style={{ width: "80%", margin: "3%" }}
    />
  </div></div>
  )
}

export default Nodejsdoc