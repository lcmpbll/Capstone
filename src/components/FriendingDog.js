import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchDogs, updateDog } from '../functions/apihelper';

function FriendDogForm(props) {
  const {dog, dogList} = props;
  

  
  
  const [friendsArray, setFriendsArray] = useState([]);
  
  const handleFriendChange = (event) => {
    const {value} = event.target;
    const newFriendsArray = dog.friendsArray.concat(value);
    setFriendsArray(newFriendsArray);
    return friendsArray;
  }
  
  const handleFriendDogFormSubmission = async(event) => {
    event.preventDefault();
    const dogWithNewFriend = {
      ...dog,
      friendsArray: handleFriendChange(event)
    }
    console.log(dogWithNewFriend);
    await updateDog(dogWithNewFriend);
  }
  
  const dogFormStyle = {
    height: '200px',
    width: 'container'
  }
  
  return (
    <>
    <hr/>
      <form onSubmit={handleFriendDogFormSubmission} style={dogFormStyle}>
        <h2>Find Friends for {dog.dogName}:</h2>
        <select onChange={handleFriendChange} >
          <option value='none'>--Select a friend for your dog--</option>
          {(dogList).filter(dogs => dogs.id !== props.dog.id).map((dogs) => <option key={dogs.id} value={dogs.id}>{dogs.dogName}</option>)}
        </select>

        <button type="submit" className='btn btn-default'>Submit</button> 
      </form>
    </>
  );
}

FriendDogForm.propTypes = {
  mainDogList: PropTypes.array,
  dog: PropTypes.object,
  onFriendsSelection: PropTypes.func,
  
  
}

export default FriendDogForm