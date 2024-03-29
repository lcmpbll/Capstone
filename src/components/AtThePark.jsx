import React, { useEffect, useState } from 'react';
import {Park, sendDogsHome} from './Park';
import {Link} from 'react-router-dom';
import { Box } from '@mui/material';





const AtThePark = (props) => {
  const {dogList} = props;
  const [atTheParkList, setAtTheParkList] = useState([]);
  const oneHour = 60 * 60 * 1000;

  useEffect(()=> {
    if(dogList !== null){
      const newAtTheParkList = dogList.filter(dog=> dog.atThePark === true);
      setAtTheParkList(newAtTheParkList);
    }
    sendDogsHome(atTheParkList, oneHour)
    
  }, [dogList, oneHour])
  //Styles
  const mainAtTheParkStyles = {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '10% 20%',
    
  
      
   
  }
  const dogAtTheParkStyles = {
    marginTop: '2px',
    margin: 'auto',
 
  }
  const parkHeaderStyle = {
    margin: 'auto',
  }
  const linkStyle = {
    textDecoration: 'none',
    color: 'black'
  }
  
  // background: 'rgba(219, 219, 219, 0.6)',
  // border: 'solid 2px black',
  
  return dogList ? (
    <>
      <Box style={mainAtTheParkStyles}>
        <Box style={parkHeaderStyle}>
          <h1>Alberta Park</h1>
        </Box>
        <Park atTheParkList={atTheParkList} />
        {atTheParkList.map((dog) =>
        <Box style={dogAtTheParkStyles} key={dog.id}>
        <Link to={`dog/${dog.id}`} style={linkStyle}>
          <h1>{dog.dogName}</h1>
        </Link>
        {/* <button onClick = {() => props.whenDogFriendClicked(dog.id)}>Add as a friend</button>
        May add this back in, but for now going to use edit dog to add to dogFriends */}
        
        </Box>
        )}
      </Box>
    </>
  ) : null;
}

export default AtThePark;