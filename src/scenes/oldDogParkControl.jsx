import React, { useState, useEffect } from 'react';
import DogList from './DogList';
import NewDogForm from '../scenes/NewDogForm';
import DogDetail from './DogDetail';
import AtThePark from './AtThePark';
import FriendingDog from './FriendingDog';
import { fetchDogs, deleteDog, updateDog, addDog} from '../functions/apihelper';




function DogParkControl(){
  const [mainDogList , setMainDogList ] = useState([]);
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [selectedDog, setSelectedDog] = useState(null);
  const [friendingDog, setFriendingDog] = useState(false);
  const [ageError, setAgeError] = useState(null);

 
  
  //  AWS Api fetch 

  
  useEffect(() => {
    update();
  },[]);
  
  const update = async () => {
    const newDogList = await fetchDogs();
    setMainDogList(newDogList);
    console.log(mainDogList)
  }

  const handleAddingNewDogToList = async (newDog) => {
    await addDog(newDog)
      .then ( await update());
    setFormVisibleOnPage(false);
  };
  
  const handleDeletingDog = async (dogToDelete) => {
    await deleteDog(dogToDelete);
    update();
    setSelectedDog(null);
  }
  
  const handleEditingDogInList = async (editedDog) => {
    await updateDog(editedDog);
    update();
  }
    
  const handleClick = () => {
    if(selectedDog != null){
      setFormVisibleOnPage(false);
      setSelectedDog(null);
      setFriendingDog(false);
      setAgeError(null);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }
  
  
  const handleChangingSelectedDog = (id) => {
    const selection = mainDogList.filter(dog=> dog.id === id)[0];
    setSelectedDog(selection);
    console.log(selection);
  }
  
  const handleGoingToThePark = (id) => {
    const dogGoingToPark = mainDogList.filter(dog => dog.id === id);
    console.log(dogGoingToPark, 'ln95');
      if(dogGoingToPark[0].dogAgeGroup === 'Young Puppy'){
        setAgeError('Your dog is too young to be vaccinated. Please explore alternative exercise and socialization opportunities');
        return ageError;
      } else {
        if(dogGoingToPark[0].atThePark === true){
          const dogAtPark = {
            ...dogGoingToPark[0],
            atThePark: false
          }
          handleEditingDogInList(dogAtPark);
        } else {
          const dogAtPark = {
            ...dogGoingToPark[0],
            atThePark: true
          }
          handleEditingDogInList(dogAtPark);
        }
      }
    }
  
  
  const handleConfirmingFriend = (editedDog) => {
    handleEditingDogInList(editedDog);
    setFriendingDog(false);
  }
  
  const handleFriendingClick = () => {
    setFriendingDog(true);
  }
  
  return ( 
    <>
      <DogList/>
      <AtThePark/>
    </>
  )
    
    
  
  //display ifs and elses
  
  // let parkList = null;
  // let currentlyVisibleState = null;
  // let buttonText = null;
  // if(friendingDog === true){
  //   currentlyVisibleState = <FriendingDog dog={selectedDog} dogList={mainDogList} onFriendsSelection={handleConfirmingFriend} />
  //   buttonText="Return to dog list"
  // } else if(selectedDog != null){
  //   currentlyVisibleState = <DogDetail dog={selectedDog} dogList={mainDogList} onClickingFriend={handleFriendingClick} onClickingDelete={handleDeletingDog} onClickingGo={handleGoingToThePark}  error={ageError}/>
  //   buttonText= 'Return to dog list';
  // // } else if(formVisibleOnPage) {
  // //   currentlyVisibleState = <NewDogForm onNewDogCreation={handleAddingNewDogToList} dogList={mainDogList} />
  // //   buttonText = 'Return to dog list';
  // } else {
  //   currentlyVisibleState = <DogList onDogSelection={handleChangingSelectedDog} dogList={mainDogList} />
  //     parkList = <AtThePark mainDogList={mainDogList} />
  //   buttonText = 'Add Dog';
  // }
  
  // return(
  //   <>
  //     <div style={dogParkControlStyle} >
  //       <div style={mainContentStyle}>
  //         {currentlyVisibleState}
  //       </div>
  //       <div style={atTheParkStyle}>
  //         {parkList}
  //       </div>
  //       <button to='/addDog' style={buttonStyle} onClick={handleClick}>{buttonText}</button>
  //     </div>
  //   </>
  // );
}

    // styles
    const dogParkControlStyle = {
      display: 'flex',
    }
    
    const atTheParkStyle = {
      position: 'absolute',
      right: '30px',
      
    }
    
    const buttonStyle = {
      position: 'absolute',
      bottom: '30px',
      left: '20px'
    }
    
    const mainContentStyle = {
      justifyContent: 'center',
      marginLeft: '400px',
    }

export default DogParkControl;