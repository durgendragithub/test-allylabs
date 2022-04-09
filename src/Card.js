import React from 'react';
import  './App.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Card = (props) => {
  return (
    <>
   
    <div className='cardwrap'>
      
      <div className='img'>
         <img src={props.img} />
      </div>
      <div className='body'>
        <h3 className="title">{props.title}</h3>
        <p className="des">{props.description}</p>
        <h5 className="price"><CurrencyRupeeIcon color="success" fontSize='x-small'/>{props.price}</h5>
        <button className="btn">explore</button>
      </div>
     
    </div>
    </>
  )
}

export default Card;
