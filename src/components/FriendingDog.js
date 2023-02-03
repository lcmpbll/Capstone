import React, {useState} from 'react';
import PropTypes from 'prop-types';

function FriendDogForm(props) {
  const {dog, dogList} = props;
  const [friendsArray, setFriendsArray] = useState([]);
  
  const handleFriendChange = (event) => {
    const {value} = event.target;
    const newFriendsArray = dog.friendsArray.concat(value);
    setFriendsArray(newFriendsArray);
    return friendsArray;
  }
  
  function handleFriendDogFormSubmission(event){
    event.preventDefault();
    props.onFriendsSelection({
      dogName: dog.dogName,
      dogWeight: dog.dogWeight,
      dogSize: dog.dogSize,
      dogYears: dog.dogYears,
      dogMonths: dog.dogMonths,
      dogAge: dog.dogAge,
      dogAgeGroup: dog.dogAgeGroup,
      dogSex: dog.dogSex,
      dogLikes: dog.dogLikes,
      dogDislikes: dog.dogDislikes,
      dogParks: dog.dogParks,
      atThePark: dog.atThePark,
      id: dog.id,
      friendsArray: handleFriendChange(event),
    })
  }
  
  return (
    <>
      <form onSubmit={handleFriendDogFormSubmission}>
        <h1>Find Friends for {dog.dogName}:</h1>
        <select onChange={handleFriendChange} >
          <option value='none'>--Select a friend for your dog--</option>
          {(dogList).filter(dogs => dogs.id !== props.dog.id).map((dogs) => <option key={dogs.id} value={dogs.id}>{dogs.dogName}</option>)}
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