import React from 'react';

const Card = ({element,index}) => {
    return (
        <div key={index} className='main col-sm-12 col-md-6 col-lg-4 col-xl-3 align-items-center p-3'>
        <div className="container"> 
    <div class="card-group">
      <div class="card">
        <img
          class="card-img-top"
          src={element.img}
          alt="Card image cap"
        />
        <div class="card-body text-center">
          <h5 class="card-title">{element.head}</h5>
          <h4 class="card-text">{element.content}</h4>
          </div>
        <div class="card-footer">
          <small class="text-muted">{element.data} </small>
        </div>
      </div>
    </div>
    
  </div>
  
  </div>
    );
};

export default Card;