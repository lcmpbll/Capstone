import React from 'react';
import Park from './Park';
import {Link} from 'react-router-dom';




const AtThePark = (props) => {
 const { dogList } = props;
  let atTheParkList = dogList.filter(dog=> dog.atThePark === true)
  //Styles
  const mainAtTheParkStyles = {
    display: 'flex',
    marginRight: '20px',
    flexDirection: 'column',
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
  
  return(
    <>
      <div style={mainAtTheParkStyles}>
        <div style={parkHeaderStyle}>
          <h1>Alberta Park</h1>
        </div>
        <Park atTheParkList={atTheParkList} />
        {atTheParkList.map((dog) =>
        <div style={dogAtTheParkStyles} key={dog.id}>
        <Link to={`dog/${dog.id}`} style={linkStyle}>
          <h1>{dog.dogName}</h1>
        </Link>
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