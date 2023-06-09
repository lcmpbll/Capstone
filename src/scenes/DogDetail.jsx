import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import {AppContext} from '../components/App';
import { useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchDog, fetchDogs, deleteDog } from '../functions/apihelper';
import { switchParkStatus } from '../functions/parkFunctions';
import FriendDogForm from '../components/FriendingDog';






const DogDetail = () => {
  const [ dog, setDog ] = useState(null);
  const [ageError, setAgeError] = useState(null);
  const [friending, setFriending] = useState(null);
  const [areYouSure, setAreYouSure] = useState(false);
  const [sureResponse, setSureResponse] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [ dogList, setDogList ] = useState([]);
  const { route } = useAuthenticator((context) => [context.route]);
  const { currentUser } = useContext(AppContext);
  const isNonMobile = useMediaQuery('(min-width:600px)')
  useEffect(() => {
    getDogs();
    
  }, []);
  
  const getDogs = async () => {
    const newDogList = await fetchDogs();
    setDogList(newDogList);
  }


  useEffect(() => {
    fetchDog(id)
    // .then((res) => res.json())
    .then((data) => setDog(data));
  }, [id])
  
  const onClickingDelete = (dog) => {
    console.log('click')
    if(currentUser.id === dog.ownerId || currentUser.username === 'liam22campbell@gmail.com'){
      setAreYouSure(true);
      console.log(areYouSure)
      if(areYouSure === true && sureResponse === true){
        deleteDog(dog);
      }
      
    }
  }
  
 const handleClickingConfirm = (dog) => {
  setSureResponse(true);
  if(areYouSure === true && sureResponse === true){
    deleteDog(dog);
    navigate('/');
  }
 }
  
 
  if(!dog) return null;
  // const {dog, dogList, onClickingDelete, onClickingFriend, onClickingGo, error} = props;
  const displayedFriends = dogList.filter(function(dogFriends){
    let dogsFriends = dog.friendsArray.indexOf(dogFriends.id) !== -1;
    return dogsFriends;
  });
  
  // const handleEditingDogInList = async (dog) => {
  //   await updateDog(dog);
    
  // }
  
  const onClickingGo = (dog) => {
    if(dog.dogAgeGroup === 'Young Puppy'){
      setAgeError('Your dog is too young to be vaccinated. Please explore alternative exercise and socialization opportunities');
      return ageError;
    } else {
      switchParkStatus(dog);
    } 
  }

  
  const displayLikes = dog.dogLikes.join(" ");
  const dsiplayDislikes = dog.dogDislikes.join(" ");
  
  
  //Styling
  const detailsPageStyle = {
    border: '2px solid black',
    display: 'grid',
    gridTemplateColumns: isNonMobile ? '1fr 2fr' : '1fr',
  }
  const headerStyle = {
    // marginLeft: '25%'
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '1rem',
  }
  const detailsStyles = {
    margin: '20px',
    padding: '20px',
    display: 'flex',
    width: '80%',
    flexDirection: 'column',
    position: 'relative',
    fontWeight: 'bold',
    background: 'rgba(219, 219, 219, 0.6)',
  }
  const friendsListStyle = {
    margin: '4px', 
    display: 'flex',
    
  }
  
  let friendForm = null;
  let atTheParkStatus = null;
  let buttonText = null;
  const dogPotentialFriendsList = dogList.filter(dogs => !dog.friendsArray.includes(dogs.id));
 
  if(friending){
    friendForm = <FriendDogForm  dog={dog} dogList={dogPotentialFriendsList} />
  }
  if(dog.atThePark === true && ageError === null){
    buttonText = "leave the park";
    atTheParkStatus = '';
  } else {
    buttonText = "Go to the park";
    atTheParkStatus = 'not'
  }
  return(
    <div style={detailsPageStyle}>
      <div style={headerStyle}>
        <h1 >Dog Details</h1>
        <Link to={`/`}><button>Home</button></Link>
      </div>
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
        {currentUser?.id === dog.ownerId || (dog.ownerId === null && currentUser?.username === 'liam22campbell@gmail.com') ? 
          <div className='owner_functions'>
            <div className='friends'>
              <h2>Friends</h2>
              <div style={friendsListStyle}>
                {displayedFriends ? displayedFriends.map((dog) => <FriendedDog
                  key={dog.dogId}
                  dogName={dog.dogName} />
                  ): null}
              </div>
              <div>
                
              </div>
              <br/>
              
              <button onClick={() => (setFriending(!friending))}>{friending ? `Close Friend Form` : `Make Some Friends`}</button>
              {friendForm}
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
          </div>
        : null }
      
        <div className='buttonControl'>
          {areYouSure ? 
            <div className='dogDetails__buttonControl-deleteModal'>
              <DeleteModal handleClickingConfirm={handleClickingConfirm} dog={dog}/>
            </div>
          :
            <button onClick={()=> onClickingDelete(dog)}>Remove Dog</button>
          }
        </div>
      </div>
    </div>
  );

  
}


const DeleteModal = (props) => {
  const {handleClickingConfirm, dog} = props;
  
  return(
    <div sx={{height: '20%', width: '50%', margin: 'auto', padding: '10px'}}>
      <button sx={{cursor: 'pointer'}} onClick={() => handleClickingConfirm(dog)} >Confirm deleting {dog.name}</button>
    </div>
  )
}

const FriendedDog = (props) => {
  const dogsFriendsStyle = {
    margin: '4px'
  }
  return (
    <div style={dogsFriendsStyle}>
      <p>{props.dogName}</p>
    </div>
  );
};

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
