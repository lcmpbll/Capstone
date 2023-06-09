import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { updateDog } from '../functions/apihelper';

function FriendDogForm(props) {
  const {dog, dogList, pendingFriendsList} = props;
  
  const officialDogList = dogList.filter(dogs => pendingFriendsList.includes(dogs.id) === false);
  
  const [target, setTarget] = useState(null);
  const [friendsArray, setFriendsArray] = useState([]);
  const [pendingArray, setPendingArray] = useState([]);
  
  const handleFriendChange = (event) => {
    const {value} = event.target;
    const newTarget = dogList.filter(dogs => dogs.id === value)[0];
    setTarget(newTarget)
    console.log(target, 'friend')
    const newFriendsArray = dog.friendsArray.concat(value);
    setFriendsArray(newFriendsArray);
    return friendsArray;
  }
  
  const handleNewRequest = (event) => {
    const {value} = event.target;
    // const target = dogList.filter(dogs => dogs.id === value)[0];
    console.log(target, 'pending');
    // if(target.pendingFrieds.includes(dog.id)){
    //   const newPendingArray = dog.pendingFriends;
    //   setPendingArray(newPendingArray);
    //   return pendingArray;
    // } else {
      const newPendingArray = pendingArray.concat(target.id);
      setPendingArray(newPendingArray);
      return pendingArray;
    }
//}
  const handleFriendDogFormSubmission = async(event) => {
    event.preventDefault();
    const dogWithNewFriend = {
      ...dog,
      friendsArray: handleFriendChange(event),
      pendingFriends: handleNewRequest(event),
    }
    
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
          {(officialDogList).filter(dogs => dogs.id !== props.dog.id).map((dogs) => <option key={dogs.id} value={dogs.id}>{dogs.dogName}</option>)}
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