import React from 'react';
import PropTypes from 'prop-types';


function DogDetail(props){
  const {dog, dogList, onClickingDelete, onClickingFriend, onClickingGo} = props;
  const displayedFriends = dogList.filter(function(dogFriends){
    return dog.friendsArray.indexOf(dogFriends.id) !== -1;
  });
 
  //Styling
  const detailsStyles = {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    justifyContent: 'center',
    // marginLeft: '450px',
    fontWeight: 'bold',
  }
  let buttonText = 'Switch Park Status!'
  return(
    <React.Fragment>
      <div style={detailsStyles}>
        <h1>{dog.dogName}</h1>
        <div>
          <h2>Stats:</h2>
          <p>Size: {dog.dogSize}</p>
          <p>Weight: {dog.dogWeight} lbs</p>
          <p>Age: {dog.dogAgeGroup}</p>
        </div>
        <hr/>
        <div className='likes'>
          <h2>Likes</h2>
          {dog.dogLikes}
          <hr/>
        </div>
        <div className='dislikes'>
          <h2>Dislikes</h2>
          {dog.dogDislikes}
          <hr/>
        </div>
        <div className='friends'>
          <h2>Friends</h2>
          {displayedFriends.map((dog) => dog.dogName)}
          <hr/>
        </div>
        <div className='parks'>
          <h2>Parks</h2>
          {dog.dogParks} &nbsp;
          <button onClick={() => onClickingGo(dog.id)} >{buttonText}</button>
          <hr />
        </div>
        <br/>
        <div className='buttonControl'>
          <button onClick={() => onClickingFriend(dog.id)}>Make some Dog friends</button> &nbsp;
          <button onClick={()=> onClickingDelete(dog)}>Remove Dog</button>
        </div>
      </div>
    </React.Fragment>
  )
}

DogDetail.propTypes = {
  dog: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingFriend: PropTypes.func,
  displayedDogFriends: PropTypes.array,
  dogList: PropTypes.array
  
}

export default DogDetail;
