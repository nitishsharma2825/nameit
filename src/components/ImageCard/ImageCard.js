import React from 'react';
import './ImageCard.css';

const url =
  'https://www.namecheap.com/domains/registration/results/?domain=%27%3B';
const ImageCard = (props) => {
  return (
    <a
      target='_blank'
      rel='noreferrer'
      className='card-link'
      href={`${url}${props.name}`}
    >
      <div className='result-name-card'>
        <p className='result-name'>{props.name}</p>
      </div>
    </a>
  );
};
export default ImageCard;
