import React from 'react';
import Park from './Park';



function AtThePark(props){
  const { mainDogList } = props;
  let atTheParkList = mainDogList.filter(dog=> dog.atThePark === true)
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
  
  return(
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default AtThePark;