import React from 'react';
import {DogListWrappedPark, DogListWrappedDogs} from '../WrappedComponents/DogListWrapped';
import { SplitScreen } from '../components/SplitScreen';

export const Home = () => {

 
  return (
 
      <SplitScreen
     
        leftWeight={1}
        rightWeight={1}
      >
        <DogListWrappedDogs/>

        
        <DogListWrappedPark />
      </SplitScreen>
    );
}



