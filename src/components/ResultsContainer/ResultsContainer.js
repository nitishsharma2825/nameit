import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import './ResultsContainer.css';
const ResultsContainer = (props) => {
  const Names = props.results.map((name, idx) => {
    return <ImageCard key={idx} name={name} />;
  });
  return <div className='results-container'>{Names}</div>;
};
export default ResultsContainer;
