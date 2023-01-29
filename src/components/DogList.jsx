import React, { useState, useEffect } from 'react';
import Dog from './Dog';
import PropTypes from 'prop-types';
import { fetchDogs } from '../functions/apihelper';


const DogList = (props) => {
  const [ dogList, setDogList ] = useState([]);
  console.log(dogList);
  useEffect(() => {
    getDogs();
    // const newDogList = fetchDogs();
    // setDogList(newDogList);
  }, []);
  
  const getDogs = async () => {
    const newDogList = await fetchDogs();
    setDogList(newDogList);
  }
  const dogCardStyle = {
    border: 'solid 2px #fffff',
    margin: '13px',
    width: '400px',
    background: 'rgba(219, 219, 219, 0.6)',
    padding: '3px'
  }
  return (
    <>
      <h1>All Dogs</h1>
      {dogList.map((dog) =>
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
      )}
    </>
  );
}

DogList.propTypes = {
  dogList: PropTypes.array,
  onDogSelection: PropTypes.func
};

export default DogList;