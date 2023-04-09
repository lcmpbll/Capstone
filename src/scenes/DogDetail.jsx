import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAuthenticator, Heading } from '@aws-amplify/ui-react';
import {AppContext} from '../components/App';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { fetchDog, fetchDogs } from '../functions/apihelper';
import { switchParkStatus } from '../functions/parkFunctions';
import FriendDogForm from '../components/FriendingDog';





const DogDetail = () => {
  const [ dog, setDog ] = useState(null);
  const [ageError, setAgeError] = useState(null);
  const [friending, setFriending] = useState(null);
  const { id } = useParams();
  const [ dogList, setDogList ] = useState([]);
  const { route } = useAuthenticator((context) => [context.route]);
  const { currentUser } = useContext(AppContext);
  useEffect(() => {
    getDogs();
    console.log('fetching');
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
    gridTemplateColumns: '1fr 2fr'
  }
  const headerStyle = {
    marginLeft: '25%'
  }
  const detailsStyles = {
    margin: '20px',
    padding: '20px',
    display: 'flex',
    width: '50%',
    flexDirection: 'column',
    position: 'relative',
    // justifySelf: 'center',
    // justifyContent: 'center',
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
        {currentUser?.id === dog.ownerId || dog.ownerId === null? 
          <div className='owner_functions'>
            <div className='friends'>
              <h2>Friends</h2>
              <div style={friendsListStyle}>
                {displayedFriends ? displayedFriends.map((dog) => <FriendedDog
                  key={dog.dogId}
                  dogName={dog.dogName} />
                  ): null}
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
        {/* <div className='buttonControl'>
          <button onClick={() => onClickingFriend(dog.id)}>Make some Dog friends</button> &nbsp;
          <button onClick={()=> onClickingDelete(dog)}>Remove Dog</button>
        </div> */}
      </div>
    </div>
  );

  
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
