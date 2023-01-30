import React, { useEffect, useState } from 'react';
import Dog from './Dog';
import PropTypes from 'prop-types';
import { fetchDogs } from '../functions/apihelper';
import AtThePark from './AtThePark';


const DogList = (props) => {
  const [ dogList, setDogList ] = useState([]);
  useEffect(() => {
    getDogs();
    console.log(dogList);

  }, []);
  
  const getDogs = async () => {
    const newDogList = await fetchDogs();
    setDogList(newDogList);
  }
  
  //styles
  const dogsStyle = {
    display: 'grid',
    gridTemmplateColumns: '1fr 1fr'
  }
  const dogCardStyle = {
    border: 'solid 2px #fffff',
    margin: '13px',
    width: '400px',
    background: 'rgba(219, 219, 219, 0.6)',
    padding: '3px'
  }
  const dogListStyle = {
    margin: '10px'
  }
  const dogParkStyle = {
    margin: '10px',
    background: 'rgba(219, 219, 219, 0.6)',
    border: 'solid 2px #fffff',
    
  }
  return (
    <div style={dogsStyle}>
      <div style={dogListStyle}>
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
      </div>
      <div style={dogParkStyle}>
        <AtThePark dogList={dogList}/>
      </div>
    </div>
  );
}

DogList.propTypes = {
  dogList: PropTypes.array,
  onDogSelection: PropTypes.func
};

export default DogList;