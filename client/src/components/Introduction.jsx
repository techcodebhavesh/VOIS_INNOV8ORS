import React from 'react';
import './Introduction.css';

const Introduction = () => {
  return (
    <div className='docmBox-intro'>
      <h1 className='intro-head'>Introduction</h1>
      <p className='intro_para'>Welcome to the Catalog Scoring website – your go-to platform for efficiently assessing the quality of catalogs in the retail commerce sector. This platform is designed to address the challenges faced by Buyer Apps in ensuring that the catalogs they receive from Seller Apps meet the minimum acceptable quality standards. The primary focus is on compliance, correctness, and completeness of the catalogs, enhancing the overall user experience.
      </p>
      <div className='intro-list'>
        <div className='intro-list-item'>
          <h3>User Interface</h3>
          <p>
          Overview of the platform's purpose and benefits.<br />
          Quick access to key features.
          </p>
        </div>
        <div className='intro-list-item'>
          <h3>Catalog Assessment</h3>
          <p>Detailed breakdown of the catalog scoring mechanism.<br />
          Granular assessment parameters with associated weights.<br />
          Aggregate score computation for merchant catalogs.
          </p>
        </div>
        <div className='intro-list-item'>
          <h3>Compliance</h3>
          <p>Explanation of compliance assessment parameters.<br />
          Guidelines for ensuring adherence to applicable laws and regulations.
          </p>
        </div>
        <div className='intro-list-item'>
          <h3>Correctness</h3>
          <p>Details on correctness assessment parameters.<br />
          Guidance on maintaining authenticity and proper branding in catalogs.
          </p>
        </div>
        <div className='intro-list-item'>
          <h3>Completeness</h3>
          <p>Information on completeness assessment parameters.<br />
          Minimum attributes required for clear product understanding.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
