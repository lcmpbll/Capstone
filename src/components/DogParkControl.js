import React, { useState } from 'react';
import DogList from './DogList';
import NewDogForm from './NewDogForm';
import DogDetail from './DogDetail';


function DogParkControl(){
  const [mainDogList , setMainDogList ] = useState([]);
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [selectedDog, setSelectedDog] = useState(null);
  const handleClick = () => {
    if(selectedDog != null){
      setFormVisibleOnPage(false);
      setSelectedDog(null);
      // setEditingDog(false);
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
    const selection = mainDogList.gilter(dog=> dog.id === id)[0];
    setSelectedDog(selection);
    console.log('click');
  }
  
  const handleAddingNewDogToList = (newDog) => {
    const newMainDogList = mainDogList.concat(newDog);
    setMainDogList(newMainDogList);
    console.log(newDog);
    console.log(mainDogList);
    setFormVisibleOnPage(false);
  }
  let currentlyVisibleState = null;
  let buttonText = null;
  if(selectedDog != null){
    currentlyVisibleState = <DogDetail dog={selectedDog} onClickingDelete={handleDeletingDog} />
    buttonText= 'Return to dog list';
  } else if(formVisibleOnPage) {
    currentlyVisibleState = <NewDogForm onNewDogCreation={handleAddingNewDogToList} />
    buttonText = 'Return to dog list';
  } else {
    currentlyVisibleState = <DogList onDogSelection={handleChangingSelectedDog} dogList={mainDogList} />
    buttonText = 'Add Dog';
  }
  return(
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  );
}

export default DogParkControl;