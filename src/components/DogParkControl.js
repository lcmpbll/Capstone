import React, { useState, useEffect } from 'react';
import DogList from './DogList';
import NewDogForm from './NewDogForm';
import DogDetail from './DogDetail';
import AtThePark from './AtThePark';
import FriendingDog from './FriendingDog';
import { API } from 'aws-amplify';
import { listDogs } from '../graphql/queries';
import { createDog as createDogMutation, deleteDog as deleteDogMutation } from '../graphql/mutations';
import { flushSync } from 'react-dom';



function DogParkControl(){
  const [mainDogList , setMainDogList ] = useState([]);
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [selectedDog, setSelectedDog] = useState(null);
  const [mainAtTheParkList, setMainAtTheParkList] = useState([]);
  const [friendingDog, setFriendingDog] = useState(false);
  
  // useEffect(() => {
  //   fetchDogs();
  // }, []);
  
  // async function fetchDogs() {
  //   const apiData =  await API.graphql({ query: listDogs });
  //   console.log(apiData);
  //   const apiDogs = apiData.data.listDogs.items;
  //   console.log(apiDogs);
  //   setMainDogList(apiDogs);
    
  // }
  
  // const handleAddingNewDogToList = async (newDog) => {
  //   await API.graphql({ query : createDogMutation, variables : { input: newDog}, });
  //   fetchDogs();
  //   setFormVisibleOnPage(false);
  // }
  
  const handleAddingNewDogToList = (newDog) => {
    const newMainDogList = mainDogList.concat(newDog);
    setMainDogList(newMainDogList);
    console.log(newMainDogList);
    setFormVisibleOnPage(false);
  }
  
  
  
  
  
  const handleClick = () => {
    if(selectedDog != null){
      setFormVisibleOnPage(false);
      setSelectedDog(null);
      setFriendingDog(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }
  const handleDeletingDog = async ({id}) => {
    const newMainDogList = mainDogList.filter((dog) => dog.id !== id);
    setMainDogList(newMainDogList);
    await API.graphql({
      query: deleteDogMutation,
      variables: { input: {id}},
    });
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
  
  const handleFriendingClick = () => {
    setFriendingDog(true);
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
      marginLeft: '100px',
    }
    
    
  
  //display ifs and elses
  
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
    currentlyVisibleState = <NewDogForm onNewDogCreation={handleAddingNewDogToList} dogList={mainDogList} />
    buttonText = 'Return to dog list';
  } else {
    currentlyVisibleState = <DogList onDogSelection={handleChangingSelectedDog} dogList={mainDogList} />
      parkList = <AtThePark atTheParkList={mainAtTheParkList} />
    buttonText = 'Add Dog';
  }
  
  return(
    <React.Fragment>
      <div style={dogParkControlStyle} >
        <div style={mainContentStyle}>
          {currentlyVisibleState}
        </div>
        <div style={atTheParkStyle}>
          {parkList}
        </div>
        <button style={buttonStyle} onClick={handleClick}>{buttonText}</button>
      </div>
    </React.Fragment>
  );
}

export default DogParkControl;