import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import { fetchDogs } from '../functions/apihelper';
import Dog from '../components/Dog';



const MyDogs = ({currentUser}) => {
  
  
  const [myDogs, setMyDogs] = useState([]);
  // const currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    getDogs();
    // setCurrentUser(getUser());
  
  }, []);
  
  const getDogs = async () => {
    const newDogList = await fetchDogs();
    const myDogs = newDogList.filter(dog => dog.ownerId === currentUser.id)
    console.log(myDogs)
  }
  
  // const getUser = async () => {
  //   return await getCurrentUser();
  // }
  
  const dogCardStyle = {
    margin: '1px',
    width: '100px',
    height: '100px'
  }
  const linkStyle = {
    decoration: 'none'
  }
  
  return (
    <div>
    
      {/* <h1>my dogs Page</h1>
      <div>
        
        {myDogs.map((dog) => 
          <div style={dogCardStyle} className='card' key={dog.id}>
            <Link to={`dog/${dog.id}`} style={linkStyle}>
              <Dog 
                dogName={dog.dogName}
                dogSex={dog.dogSex}
                dogSize={dog.dogSize}
                dogAgeGroup={dog.dogAgeGroup}
                id={dog.id}
                key={dog.id}
              />
              
            </Link>
          </div>
          )}
      </div> */}
    </div>
  )
}

export default MyDogs;