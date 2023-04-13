import React, { useEffect } from 'react';
import {Park, sendDogsHome} from './Park';




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
      <div style={mainAtTheParkStyles}>
        <div style={parkHeaderStyle}>
          <h1>Alberta Park</h1>
        </div>
        <Park atTheParkList={atTheParkList} />
        {atTheParkList.map((dog) =>
        <div style={dogAtTheParkStyles} key={dog.id}>
        <h1>{dog.dogName}</h1>
        {/* <button onClick = {() => props.whenDogFriendClicked(dog.id)}>Add as a friend</button>
        May add this back in, but for now going to use edit dog to add to dogFriends */}
        <br/>
        </div>
        )}
      </div>
    </>
  );
}

export default AtThePark;