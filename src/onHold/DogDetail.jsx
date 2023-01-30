import React from 'react';
import PropTypes from 'prop-types';
import { updateDog } from '../functions/apihelper';



const DogDetail = (props) => {
  // const {dog, dogList, onClickingDelete, onClickingFriend, onClickingGo, error} = props;
  // const displayedFriends = dogList.filter(function(dogFriends){
  //   return dog.friendsArray.indexOf(dogFriends.id) !== -1;
  // });
  
  // const handleEditingDogInList = async (dog) => {
  //   await updateDog(dog);
    
  // }
  
  // const handleGoingToThePark = (id) => {
  //   const dogGoingToPark = mainDogList.filter(dog => dog.id === id);
  //   console.log(dogGoingToPark, 'ln95');
  //     if(dogGoingToPark[0].dogAgeGroup === 'Young Puppy'){
  //       setAgeError('Your dog is too young to be vaccinated. Please explore alternative exercise and socialization opportunities');
  //       return ageError;
  //     } else {
  //       if(dogGoingToPark[0].atThePark === true){
  //         const dogAtPark = {
  //           ...dogGoingToPark[0],
  //           atThePark: false
  //         }
  //         handleEditingDogInList(dogAtPark);
  //       } else {
  //         const dogAtPark = {
  //           ...dogGoingToPark[0],
  //           atThePark: true
  //         }
  //         handleEditingDogInList(dogAtPark);
  //       }
  //     }
  //   }
  
  
  // const displayLikes = dog.dogLikes.join(" ");
  // const dsiplayDislikes = dog.dogDislikes.join(" ");
  
  
  //Styling
  // const detailsStyles = {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   position: 'relative',
  //   justifyContent: 'center',
  //   fontWeight: 'bold',
  // }
  
  // let atTheParkStatus = null;
  // let buttonText = null;
  // if(dog.atThePark === true && error === null){
  //   buttonText = "leave the park";
  //   atTheParkStatus = '';
  // } else {
  //   buttonText = "Go to the park";
  //   atTheParkStatus = 'not'
  // }
  return(
    <>
    <h1>Dog Details</h1>
      {/* <div style={detailsStyles}>
        <h1>{dog.dogName}</h1>
        <h2>Is {atTheParkStatus} at the park.</h2>
        <div>
          <h2>Stats:</h2>
          <p>Size: {dog.dogSize}</p>
          <p>Weight: {dog.dogWeight} lbs</p>
          <p>Age: {dog.dogAgeGroup}</p>
        </div>
        <hr/>
        <div className='likes'>
          <h2>Likes</h2>
          {displayLikes}
          <hr/>
        </div>
        <div className='dislikes'>
          <h2>Dislikes</h2>
          {dsiplayDislikes}
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
          {error} <br/> 
          <button  onClick={() => {onClickingGo(dog.id) }} >{buttonText}</button>
          <hr />
        </div>
        <br/>
        <div className='buttonControl'>
          <button onClick={() => onClickingFriend(dog.id)}>Make some Dog friends</button> &nbsp;
          <button onClick={()=> onClickingDelete(dog)}>Remove Dog</button>
        </div>
      </div> */}
    </>
  )
}

DogDetail.propTypes = {
  dog: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingFriend: PropTypes.func,
  onClickingGo: PropTypes.func,
  displayedDogFriends: PropTypes.array,
  dogList: PropTypes.array,
  
  
}

export default DogDetail;
