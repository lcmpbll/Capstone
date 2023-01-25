import React from 'react';
import Dog from './Dog';
import PropTypes from 'prop-types';

function DogList(props){
  const dogCardStyle = {
    border: 'solid 2px #fffff',
    margin: '13px',
    width: '400px',
    background: 'rgba(219, 219, 219, 0.6)',
    padding: '3px'
  }
  return (
    <React.Fragment>
      <h1>All Dogs</h1>
      {(Object.values(props.dogList).map((dog) =>
      <div style={dogCardStyle} className='card' key={dog.id}>
        <Dog 
        whenDogClicked={props.onDogSelection}
        dogName={dog.dogName}
        dogSex={dog.dogSex}
        dogSize={dog.dogSize}
        dogAgeGroup={dog.dogAgeGroup}
        id={dog.id}
        key={dog.id}
        />
      </div>
      ))}
    </React.Fragment>
  );
}

DogList.propTypes = {
  dogList: PropTypes.array,
  onDogSelection: PropTypes.func
};

export default DogList;