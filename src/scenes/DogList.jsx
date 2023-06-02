import React, { useState } from 'react';
import Dog from '../components/Dog.jsx';
import {useMediaQuery} from '@mui/material';

import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';

//shade sort buttons if sort type is selected. 
const DogList = (props, {match}) => {
  const {dogList} = props;
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const [sortBy, setSortBy] = useState(null);
  const [smallest, setSmallest] = useState(true);
  const [filterBy, setFilterBy] = useState(null);
  
  const handleSortClick = (option, smallest) => {
    if(sortBy === option){
      setSmallest(!smallest);
    }
    setSortBy(option);
  
    sortDogList(sortBy, smallest)
  }
  const sortDogList = (sortBy, smallest) => {
    if(smallest === true){
      return dogList.sort((a, b) => {
        return a[sortBy] - b[sortBy]
      })
    } else {
      return dogList.sort((a, b) => {
        return b[sortBy] - a[sortBy] 
      })
    }
    
  }
  
  //styles
  const dogsStyle = {
    display: 'flex',
    flexDirection: 'column', 
    // padding: '1rem'
    // justifyContent: 'center'
    // width: '100%',
    // display: 'grid',
    // gridTemplateColumns: '1fr 1fr',
    // padding: '0px, 90px',
    // border: '20px solid transparent'
    
  }
  const dogCardStyle = {
    border: 'solid 2px #4986e8',
    margin: '13px auto',
    width:  isNonMobile ? '400px' : '200px',
    background: 'rgba(219, 219, 219)',
    padding: '13px',

  }
  
  const dogListStyle = {
    margin: 'auto',
    // margin: '10px, 60px',
    // paddingLeft: '150px',
    // justifyContent: 'center',
    
  }

  
  const sortButtonStyle = {
    margin: '5px',
    width: 'content',
    border: '2px solid',
    borderRadius: '10%',
    shadow: '0',
    cursor: 'pointer',
    
  }
  
  const linkStyle = {
    textDecoration: 'none',
    color: 'black'
  }

  return dogList ? (
    <div style={dogsStyle}>
        <h1 style={{ display: 'flex', justifySelf: 'flex-start', padding: '1rem'}}>All Dogs</h1>
      <div style={dogListStyle}>
        <div>
          <h4>Sort Dogs:</h4>
          <div>
            <button  onClick={() => handleSortClick(`dogAge`, smallest)} style={sortButtonStyle}>Age</button>
            <button  onClick={() => handleSortClick(`dogWeight`, smallest)} style={sortButtonStyle}>Size</button>
          </div>
          {/* <div>
            <h4>Filter Dogs:</h4>
            <div>
              <button  onClick={() => handleFilterClick(`likesPuppies`)} style={sortButtonStyle}>Likes Pupppies</button>
              <button  onClick={() => handleFilterClick(`female`)} style={sortButtonStyle}>Female</button>
            </div>
          </div> */}
        </div>
        {dogList.map((dog) => 
        <div style={dogCardStyle} key={dog.id}>
          {/* <Link to={`/dog/${dog.id}`} style={linkStyle}> */}
            <Dog 
              isNonMobile={isNonMobile}
              dogName={dog.dogName}
              dogSex={dog.dogSex}
              dogSize={dog.dogSize}
              dogAgeGroup={dog.dogAgeGroup}
              id={dog.id}
              key={dog.id}
            />
          {/* </Link> */}
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


