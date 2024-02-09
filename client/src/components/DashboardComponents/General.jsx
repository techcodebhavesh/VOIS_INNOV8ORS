import Card from "./components/card";
import React from "react";
import { useState } from "react";

const General = ({apiKey}) => {
    const [copied, setCopied] = useState(false);
  
    const copyToClipboard = () => {
      navigator.clipboard.writeText(apiKey);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000); // Reset copied state after 2 seconds
    };
  
  return (
    <Card extra={"w-full h-full p-3"}>
      
      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 px-2" >
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">API Key</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            {apiKey}
          </p>
          <button
        className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition"
        onClick={copyToClipboard}
      >
        {copied ? "Copied" : "Copy"}
      </button>
        </div>

        
      </div>
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white" style={{alignContent:'center'}}>
          Thanks For using "Innov8or's catalog scoring"!!!
        </h4>
        <p className="mt-2 px-2 text-base text-gray-600">
          
        </p>
      </div>
    </Card>
  );
};

export default General;
