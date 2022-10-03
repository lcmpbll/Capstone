import React, { useState } from 'react';
import DogList from './DogList';
import NewDogForm from './NewDogForm';
import DogDetail from './DogDetail';
import AtThePark from './AtThePark';
import FriendingDog from './FriendingDog';



function DogParkControl(){
  const [mainDogList , setMainDogList ] = useState([]);
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [selectedDog, setSelectedDog] = useState(null);
  const [mainAtTheParkList, setMainAtTheParkList] = useState([]);
  // const [atThePark, setAtThePark] = useState(false);
  const [friendingDog, setFriendingDog] = useState(false);
  
  const handleClick = () => {
    if(selectedDog != null){
      setFormVisibleOnPage(false);
      setSelectedDog(null);
      setFriendingDog(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }
  const handleDeletingDog = (id) => {
    const newMainDogList = mainDogList.filter(dog => dog.id !== id);
    setMainDogList(newMainDogList);
    setSelectedDog(null);
  }
  const handleChangingSelectedDog = (id) => {
    const selection = mainDogList.filter(dog=> dog.id === id)[0];
    setSelectedDog(selection);
    console.log(selection);
  }
  const handleGoingToThePark = (id) => {
    const dogGoingToPark = mainDogList.filter(dog => dog.id === id);
    const newMainAtTheParkList = mainAtTheParkList.concat(dogGoingToPark);
    if(dogGoingToPark.atThePark === false){
      dogGoingToPark.atThePark.setAtThePark(true);
      console.log(dogGoingToPark);
    }
    setMainAtTheParkList(newMainAtTheParkList);
    console.log(mainAtTheParkList);
    
  }
  //hoping I can reuse for actually editing dogs. 
  const handleEditingDogInList = (editedDog) => {
    const editedDogList = mainDogList
      .filter(dog => dog.id !== editedDog.id)
      .concat(editedDog);
    setMainDogList(editedDogList);
    setFriendingDog(false);
  }

  
  
  const handleAddingNewDogToList = (newDog) => {
    const newMainDogList = mainDogList.concat(newDog);
    setMainDogList(newMainDogList);
    console.log(newMainDogList);
    setFormVisibleOnPage(false);
  }
  
  const handleFriendingClick = () => {
    setFriendingDog(true);
  }
  let parkList = null;
  let currentlyVisibleState = null;
  let buttonText = null;
  if(friendingDog === true){
    currentlyVisibleState = <FriendingDog dog={selectedDog} dogList={mainDogList} onFriendsSelection={handleEditingDogInList} />
    buttonText="Return to dog list"
  } else if(selectedDog != null){
    currentlyVisibleState = <DogDetail dog={selectedDog} onClickingFriend={handleFriendingClick} onClickingDelete={handleDeletingDog} onClickingGo={handleGoingToThePark}/>
    buttonText= 'Return to dog list';
  } else if(formVisibleOnPage) {
    currentlyVisibleState = <NewDogForm onNewDogCreation={handleAddingNewDogToList} />
    buttonText = 'Return to dog list';
  } else {
    currentlyVisibleState = <DogList onDogSelection={handleChangingSelectedDog} dogList={mainDogList} />
      parkList = <AtThePark atTheParkList={mainAtTheParkList} />
    buttonText = 'Add Dog';
  }
  return(
    <React.Fragment>
      {currentlyVisibleState}
      {parkList}
      <button onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  );
}

export default DogParkControl;