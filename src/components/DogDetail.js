import React from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';

function DogDetail(props){
  const {dog, onClickingDelete} = props;

  return(
    <React.Fragment>
      <h1>{dog.dogName}</h1>
      <hr />
      <h2>Stats:</h2>
      <p>Size: {dog.dogSize}</p>
      <p>Weight: {dog.dogWeight}</p>
      <p>Age: {dog.dogAge}</p>
      <hr/>
      <h2>Likes</h2>
      <hr/>
      
    </React.Fragment>
  )
}