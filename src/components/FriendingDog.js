import React, {useState} from 'react';
import PropTypes from 'prop-types';

function FriendDogForm(props) {
  const {dog, dogList} = props;
  const [dogFriendsArray, setDogFriendsArray] = useState({
      dogFriends: [], dogFriendsResponse: [],
    });
  const handleFriendChange = (event) => {
    const {value} = event.target;
    // const {dogFriends} = dogFriendsArray;
    console.log(`${dog.dogName} is friends with ${value}`);
    setDogFriendsArray({
      dogFriends: [...dogFriendsArray, value],
      dogFriendsResponse: [...dogFriendsArray, value],
    }); 
  }
  
  function handleFriendDogFormSubmission(event){
    event.preventDefault();
    props.onFriendSelection({
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
    <React.Fragment>
      <form onSubmit={handleFriendDogFormSubmission}>
        <h1>Find Friends:</h1>
        <select onChange={handleFriendChange}>
          <option value='none'>--Select a friend for your dog--</option>
          {dogList.filter(dogs => dogs.id !== props.dog.id).map((dogs) => <option key={dogs.id} value={dogs.id}>{dogs.dogName}</option>)}
        </select>
        <br/>
        <button type="submit" className='btn btn-default'>Submit</button>
      </form>
    </React.Fragment>
  );
}

FriendDogForm.propTypes = {
  mainDogList: PropTypes.array,
  dog: PropTypes.object,
  onFriendsSelection: PropTypes.func,
  
  
}

export default FriendDogForm