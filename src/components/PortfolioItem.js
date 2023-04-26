import React from 'react';
import { useNavigate } from "react-router-dom";

function PortfolioItem(props) {
  const navigate = useNavigate();

  return (
    <div className="portfolioItem"
         onClick={() => {
           if (props.url) {
             navigate(props.url);
           }
         }}>
      <h3>{props.name}</h3>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <div style={{ backgroundImage: `url(${props.image})` }} className='bgImage' />
      </a>
    </div>
  );
}

export default PortfolioItem;
