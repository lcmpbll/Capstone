import React, { useState } from 'react';
import DogList from './DogList';
import NewDogForm from './NewDogForm';


function DogParkControl(){
  const [mainDogList , setMainDogList ] = useState([]);
  
  const handleAddingNewDogToList = (newDog) => {
    const newMainDogList = mainDogList.concat(newDog);
    setMainDogList(newMainDogList);
  }
  return( 
    <React.Fragment>
      <DogList dogList={mainDogList}/>
      <NewDogForm onNewDogCreation={handleAddingNewDogToList}/>
    </React.Fragment>
    )
}

export default DogParkControl;