import React from 'react';
import Card from '../components/Card';

const FullStack = ({data}) => {
    const fsd = data.filter((ele)=>ele.head==="Full Stack Development")
    return (
        <>
        <h1 className="text-center">Full Stack Development</h1>
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

export default FullStack;