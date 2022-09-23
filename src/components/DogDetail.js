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
      <div className='likes'>
        <h2>Likes</h2>
        <hr/>
        {dog.dogLikes.map((likes, index) => (
          <tr key={index}>{likes}</tr>
        ))}
      </div>
      <div className='dislikes'>
        <h2>Dislikes</h2>
        <hr/>
        {dog.dogDislikes.map((dislikes, index) => (
          <tr key={index}>{dislikes}</tr>
        ))}
      </div>
      <div className='parks'>
        <h2>Parks</h2>
        <hr />
        {dog.dogParks.map((parks, index) => (
          <tr key={index}>{parks}</tr> //Eventually this key will be an id and link to a specific park. Perhaps add parks button as well. 
        ))}
      </div>
      <div className='buttonControl'>
        <button onClick={onClickingEdit}>Edit Dog</button>
        <button onClick={()=> onClickingDelete(dog.id)}>Remove Dog</button>
      </div>
    </React.Fragment>
  )
}

DogDetail.propTypes = {
  dog: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default DogDetail;
