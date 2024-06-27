import React from "react";
import Card from "../components/Card";

const All = ({ data }) => {
  return (
    <>
    <h1 className="text-center">All Course</h1>
    <div className="row">
      {data.map((element, index) => {
        return (
         <Card element={element} index={index} />
        );
      })}
      </div>
     </>
  
  );
};

export default All;
