import React from 'react';
import DogList from '../components/DogList';


const DogParkCotrol = () => {
  return (
    <>
      <DogList/>
   
      <button><a href="/addDog" style={{textDecoration: 'none', color: 'black'}}>Add new Dog</a></button>
    </>
  )
}

export default DogParkCotrol; 