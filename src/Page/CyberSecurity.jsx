import React from 'react';
import Card from '../components/Card';

const CyberSecurity = ({data}) => {
    const fsd = data.filter((ele)=>ele.head==="Cyber Security")
    return (
        <>
        <h1 className="text-center">Cyber Security</h1>
        <div className="row">
          {fsd.map((element, index) => {
            return (
            <Card element={element} index={index} />
            );
          })}
          </div>
         </>
    );
};

export default CyberSecurity;