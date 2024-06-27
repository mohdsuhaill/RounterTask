import React from 'react';
import Card from '../components/Card';


const Career = ({data}) => {
    const fsd = data.filter((ele)=>ele.head==="Career")
    return (
        <>
        <h1 className="text-center">Career</h1>
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

export default Career;