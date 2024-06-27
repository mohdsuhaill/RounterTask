import React from 'react';
import Card from '../components/Card';

const DataScience = ({data}) => {
    const fsd = data.filter((ele)=>ele.head==="Data Science")
    return (
        <>
        <h1 className="text-center">Data Science</h1>
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

export default DataScience;