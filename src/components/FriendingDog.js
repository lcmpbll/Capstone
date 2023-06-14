import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { updateDog } from '../functions/apihelper';

function FriendDogForm(props) {
  const {dog, dogList, pendingFriendsList} = props;

  useEffect(() => {
    
  }, [dog])
  
  const officialDogList = dogList.filter(dogs => pendingFriendsList.includes(dogs.id) === false);


  const [isPending, setIsPending] = useState(false);
  const [target, setTarget] = useState(null);

  
  //When the value changes setispending based on if the dog already is in the targetDogs pending friends array
  const handlePendingCheck = (event) => {
    const {value} = event.target;
    const currentTarget = dogList.find(pup => pup.id === value);
    setTarget(currentTarget);
    if(currentTarget.pendingFriends.indexOf(dog.id) !== -1 || currentTarget.friendsArray.indexOf(dog.id) !== -1){
      setIsPending(true)
    } else {
      setIsPending(false);
    }
  }
  
  const handleFriendChange = () => {
    if(isPending === true){
      const newFriendsList = dog.friendsArray.concat(target.id);
      return newFriendsList;
    } else {
   
      return dog.friendsArray;
    }
  }
  
  const updateTargetDog = async () => {
    if(target !== null){
      const newPendingArray = target.pendingFriends.filter((id) => id !== dog.id);
      const newFriendsArray = target.friendsArray.concat(dog.id);
      const updatedTargetDog = {
        ...target,
        friendsArray: newFriendsArray,
        pendingFriends: newPendingArray
      };
      await updateDog(updatedTargetDog);
    }
  }
  
  const handleNewRequest = () => {
    if(target !== null){
      if(isPending === true){
      
        return dog.pendingFriends;
      } else {
      
        const newPendingArray = dog.pendingFriends.concat(target.id);
      
        return newPendingArray;
      }
    }
  }
  
  const handleFriendDogFormSubmission = async(event) => {
    event.preventDefault();
    const dogWithNewFriend = {
      ...dog,
      friendsArray: handleFriendChange(),
      pendingFriends: handleNewRequest(),
    }
    if(isPending === true){
      await updateTargetDog(dog);
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
        <select onChange={handlePendingCheck} >
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