import React, {useState, useEffect} from 'react';
import {fetchDogs} from '../functions/apihelper';
import DogList from './DogList';
import AtThePark from '../components/AtThePark';
import { SplitScreen } from '../components/SplitScreen';

export const Home = () => {
  const [ dogList, setDogList ] = useState([]);
  // const {currentUser} = useContext(AppContext);
  useEffect(() => {
    getDogs();

  }, []);
  
  const getDogs = async () => {
    const newDogList = await fetchDogs();
    console.log(newDogList)
    setDogList(newDogList);
  }
  console.log(dogList, 'home')
  return (
 
      <SplitScreen
     
        leftWeight={1}
        rightWeight={1}
      >
        <DogList dogList={dogList}/>
        
        <AtThePark dogList={dogList} />
      </SplitScreen>
    );
}

const RightHandComponent = ({name}) => {
  return(
    <h1 style={{backgroundColor: 'green'}}>{name}</h1>
  );
}
const LeftHandComponent = ({message}) => {
  return <p style={{backgroundColor: 'red'}}>{message}</p>
}

