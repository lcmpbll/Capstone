import React, { useEffect } from 'react';
import {Park, sendDogsHome} from './Park';
import { Box } from '@mui/material'




const AtThePark = (props) => {
  
  const { dogList } = props;
  let atTheParkList = dogList.filter(dog=> dog.atThePark === true);
  const oneHour = 60 * 60 * 1000;
  useEffect(()=> {
    sendDogsHome(atTheParkList, oneHour)
  })
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
  
  // background: 'rgba(219, 219, 219, 0.6)',
  // border: 'solid 2px black',
  
  return(
    <>
      <Box style={mainAtTheParkStyles}>
        <Box style={parkHeaderStyle}>
          <h1>Alberta Park</h1>
        </Box>
        <Park atTheParkList={atTheParkList} />
        {atTheParkList.map((dog) =>
        <Box style={dogAtTheParkStyles} key={dog.id}>
        <h1>{dog.dogName}</h1>
        {/* <button onClick = {() => props.whenDogFriendClicked(dog.id)}>Add as a friend</button>
        May add this back in, but for now going to use edit dog to add to dogFriends */}
        
        </Box>
        )}
      </Box>
    </>
  );
}

export default AtThePark;