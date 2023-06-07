import React from 'react';
import {DogListWrappedPark, DogListWrappedDogs, DogListWrappedMyDogs} from '../WrappedComponents/DogListWrapped';
import { SplitScreen } from '../components/SplitScreen';
import useMediaQuery from '@mui/material/useMediaQuery';
import SwipeScreen from '../components/SwipeScreen';

export const Home = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');

  return (
    <>
      { isNonMobile ? 
        <SplitScreen
          leftWeight={1}
          rightWeight={1}
        >
          <DogListWrappedDogs/>
          <DogListWrappedPark />
        </SplitScreen>
  
        :
        <SwipeScreen>
          <DogListWrappedDogs/>
          <DogListWrappedPark />
          <DogListWrappedMyDogs />
        </SwipeScreen>
      }
    </>
  );
}



