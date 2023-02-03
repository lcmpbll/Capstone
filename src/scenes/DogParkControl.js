import React from 'react';
import { Link } from 'react-router-dom';
import DogList from '../components/DogList';


const DogParkCotrol = () => {
  return (
    <>
      <DogList/>
   
      <button><Link to={"/addDog"} style={{textDecoration: 'none', color: 'black'}}>Add new Dog</Link></button>
    </>
  )
}

export default DogParkCotrol; 