import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { updateDog } from '../functions/apihelper';

function FriendDogForm(props) {
  const {dog, dogList, pendingFriendsList} = props;
  
  const officialDogList = dogList.filter(dogs => pendingFriendsList.includes(dogs.id) === false);
  
  // const [target, setTarget] = useState(null);
  const [friendsList, setFriendsList] = useState(dog.friendsArray);
  const [pendingList, setPendingList] = useState(pendingFriendsList);
  
  const handleFriendChange = (event) => {
    const {value} = event.target;
    
    // setTarget(value)
    console.log(value.pendingFriends)
    // if the  target dog already has the current dog in the pending array
    if(value && value.pendingFriends.indexOf(dog.id) !== -1){
      const newFriendsArray = dog.friendsArray.concat(value.id);
      setFriendsList(newFriendsArray);
      return newFriendsArray;
      
    } else {
      setFriendsList(dog.friendsArray);
      return friendsList;
    }
  }
  
  const updateTargetDog = async (event, selectedDog) => {
    const {value} = event.target;
    console.log(value, 'updog')
    const newPendingArray = value.pendingFriends.filter((id) => id !== selectedDog.id);
    const newFriendsArray = value.friendArray.concat(selectedDog.id);
    const updatedTargetDog = {
      ...value,
      friendsArray: newFriendsArray,
      pendingFriends: newPendingArray
    };
    await updateDog(updatedTargetDog);
  }
  const handleNewRequest = (event) => {
    const {value} = event.target;
    const newTarget = dogList.find(dogs => dogs.id === value.id);
    
    if(value && value.pendingFriends.indexOf(dog.id) !== -1){
      const newPendingArray = dog.pendingFriends;
      setPendingList(newPendingArray);
      return newPendingArray;
    } else {
      const newPendingArray = dog.pendingFriends.concat(value.id);
      setPendingList(newPendingArray);
      // console.log(pendingList);
      return newPendingArray;
    }
  }
  const handleFriendDogFormSubmission = async(event) => {
    event.preventDefault();
    handleFriendChange(event);
    handleNewRequest(event);
    const dogWithNewFriend = {
      ...dog,
      friendsArray: friendsList,
      pendingFriends: pendingList,
    }
    await updateTargetDog(event, dog);
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
          {(officialDogList).filter(dogs => dogs.id !== props.dog.id).map((dogs) => <option key={dogs.id} value={dogs}>{dogs.dogName}</option>)}
        </select>
        <br/>
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