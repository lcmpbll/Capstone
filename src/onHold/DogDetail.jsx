import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { updateDog, fetchDog } from '../functions/apihelper';




const DogDetail = () => {
  const [ dog, setDog ] = useState(null);
  const [ageError, setAgeError] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    fetchDog(id)
    // .then((res) => res.json())
    .then((data) => setDog(data));
  }, [id])
  
  console.log(id);
  if(!dog) return null;
  // const {dog, dogList, onClickingDelete, onClickingFriend, onClickingGo, error} = props;
  // const displayedFriends = dogList.filter(function(dogFriends){
  //   return dog.friendsArray.indexOf(dogFriends.id) !== -1;
  // });
  
  const handleEditingDogInList = async (dog) => {
    await updateDog(dog);
    
  }
  
  const onClickingGo = (dog) => {
    // const dogGoingToPark = mainDogList.filter(dog => dog.id === id);
    // console.log(dogGoingToPark, 'ln95');
      if(dog.dogAgeGroup === 'Young Puppy'){
        setAgeError('Your dog is too young to be vaccinated. Please explore alternative exercise and socialization opportunities');
        return ageError;
      } else {
        if(dog.atThePark === true){
          const dogLeavesPark = {
            ...dog,
            atThePark: false
          }
          handleEditingDogInList(dogLeavesPark);
        } else {
          const dogEntersPark = {
            ...dog,
            atThePark: true
          }
          handleEditingDogInList(dogEntersPark);
        }
      }
    }
  
  
  
  
  const displayLikes = dog.dogLikes.join(" ");
  const dsiplayDislikes = dog.dogDislikes.join(" ");
  
  
  //Styling
  const detailsPageStyle = {
    border: '2px solid black',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr'
  }
  const headerStyle = {
    marginLeft: '25%'
  }
  const detailsStyles = {
    margin: '20px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    justifyContent: 'center',
    fontWeight: 'bold',
    background: 'rgba(219, 219, 219, 0.6)',
  }
  
  let atTheParkStatus = null;
  let buttonText = null;
  if(dog.atThePark === true && ageError === null){
    buttonText = "leave the park";
    atTheParkStatus = '';
  } else {
    buttonText = "Go to the park";
    atTheParkStatus = 'not'
  }
  return(
    <div style={detailsPageStyle}>
    <h1 style={headerStyle}>Dog Details</h1>
      <div style={detailsStyles}>
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
          {/* {displayedFriends.map((dog) => dog.dogName)} */}
          <hr/>
        </div>
        <div className='parks'>
          <h2>Parks</h2>
          {dog.dogParks} &nbsp;
          {ageError} <br/> 
          <button  onClick={() => {onClickingGo(dog) }} >{buttonText}</button>
          <hr />
        </div>
        <br/>
        {/* <div className='buttonControl'>
          <button onClick={() => onClickingFriend(dog.id)}>Make some Dog friends</button> &nbsp;
          <button onClick={()=> onClickingDelete(dog)}>Remove Dog</button>
        </div> */}
      </div>
    </div>
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
