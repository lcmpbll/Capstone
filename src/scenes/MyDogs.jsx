import React, {useEffect, useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
// import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material';
import {AppContext} from '../components/App';
import Dog from '../components/Dog';
import { switchParkStatus } from '../functions/parkFunctions';



const MyDogs = (props) => {
  const {dogList} = props;
  const { currentUser } = useContext(AppContext);
  const [myDogs, setMyDogs] = useState([]);
  const isNonMobile = useMediaQuery('(min-width:600px)');
  useEffect(() => {
    if(dogList !== null){
      const myDogsList = dogList.filter(dog => dog.ownerId === currentUser.id);
      setMyDogs(myDogsList);
    }
  }, [dogList, currentUser])

  // const myDogs = dogList.filter(dog => dog.ownerId === currentUser.id)
  const { route } = useAuthenticator((context) => [context.route]);
  
  const handleSendingAllDogs = () => {
    myDogs.map((dog) => switchParkStatus(dog))
  }
  

  const dogCardStyle = {
    border: 'solid 2px black',
    padding: '10px',
    width: isNonMobile ? '400px' : '200px',
    margin: '13px',
    height: isNonMobile ? '200px' : '100px', 
    background: 'rgba(219, 219, 219)'
  }
  const linkStyle = {
    textDecoration: 'none',
    color: 'black', 
   
  }
  
  return dogList ? (
  <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
    <div style={{margin: '0px auto', display: 'flex'}}>
      <h1>Your dogs</h1>
      <button onClick={() => handleSendingAllDogs()} style={{
        margin: '15px',
        width: 'content',
        height: '30px',
        border: 'solid 2px #4986e8',
        borderRadius: '8px',
        shadow: '0',
        cursor: 'pointer',
        alignSelf: 'center'
      }}>All Dogs to the Park</button>
    </div>
    <div style={{margin: '0px auto'}}>
      {myDogs.map((dog) => 
        <div style={dogCardStyle}  key={dog.id}>
          <Link to={`/dog/${dog.id}`} style={linkStyle}>
            <Dog 
              isNonMobile={isNonMobile}
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
      </div>
    </div>
  
  ) : null;
}

export default MyDogs;