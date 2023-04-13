import React, { useEffect, useState} from 'react';
import Dog from '../components/Dog';
// import { AppContext } from '../components/App';
import PropTypes from 'prop-types';
import { fetchDogs } from '../functions/apihelper';
import AtThePark from '../components/AtThePark';
import { Link, Route } from 'react-router-dom';


const DogList = (props, {match}) => {
  const {dogList} = props;

  //styles
  const dogsStyle = {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    padding: '0px, 90px',
    border: '20px solid transparent'
    
  }
  const dogCardStyle = {
    border: 'solid 2px #4986e8',
    margin: '13px',
    width: '400px',
    background: 'rgba(219, 219, 219)',
    padding: '13px',

  }
  const dogListStyle = {
    margin: '10px, 60px',
    paddingLeft: '150px',
    justifyContent: 'center',
    
  }

  
  const linkStyle = {
    textDecoration: 'none',
    color: 'black'
  }
  return dogList ?(
    <div style={dogsStyle}>
      
      <div style={dogListStyle}>
        <h1 style={{marginLeft: '150px'}}>All Dogs</h1>
        {dogList.map((dog) =>
        <div style={dogCardStyle} className='card' key={dog.id}>
          <Link to={`dog/${dog.id}`} style={linkStyle}>
            <Dog 
              dogName={dog.dogName}
              dogSex={dog.dogSex}
              dogSize={dog.dogSize}
              dogAgeGroup={dog.dogAgeGroup}
              id={dog.id}
              key={dog.id}
            />
          </Link>
        </div>
        )}
      </div>
     
    </div>
  ): null;
}

DogList.propTypes = {
  dogList: PropTypes.array,
  Dog: PropTypes.object,
};

export default DogList;


