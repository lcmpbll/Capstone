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
   
    setDogList(newDogList);
  }
 
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



