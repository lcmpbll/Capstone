import React, {useState, useEffect} from 'react';
import { fetchDogs } from '../functions/apihelper';



export const withDogList = (Component) => {
  return props => {
    const [dogList, setDogList] = useState(null);
    useEffect(() => {
      (async () => {
        const response = await fetchDogs();
        setDogList(response);
      })();
    }, [])
    return <Component {...props} dogList={dogList} />
  }
}