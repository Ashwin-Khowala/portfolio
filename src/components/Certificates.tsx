import React from 'react';
import './Certificates.css';
import { FaJava, FaCode, FaGlobe, FaExternalLinkAlt } from 'react-icons/fa';

export default function Certificates() {
  return (
    <div className='certificates-body'>
        <h1>Certificates</h1>
        <div className='certificates-container'>
            <Certifications 
                link="https://drive.google.com/drive/u/4/folders/10pp7hOnqgAdTJhMduaTH6sRiLpaXNPqi" 
                title="DSA Certification on JAVA" 
                description="GeeksForGeeks"
                icon={<FaJava />}
            />
            <Certifications 
                link="https://drive.google.com/drive/u/4/folders/10pp7hOnqgAdTJhMduaTH6sRiLpaXNPqi" 
                title="Web Development" 
                description="CodeChef"
                icon={<FaGlobe />}
            />
            <Certifications 
                link="https://drive.google.com/drive/u/4/folders/10pp7hOnqgAdTJhMduaTH6sRiLpaXNPqi" 
                title="Problem Solving" 
                description="CodeChef"
                icon={<FaCode />}
            />
        </div>
    </div>
  )
}

// to display certificate on the page when clicked
function Certifications({link, title, description, icon}:any) {
  return (
    <div className="certificate" >
      <a href={link} target="_blank" rel="noreferrer">
        <div className='certificate-content'>
          <div className="certificate-icon">{icon}</div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="certificate-link-icon"><FaExternalLinkAlt /></div>
      </a>
    </div>
  );
}
