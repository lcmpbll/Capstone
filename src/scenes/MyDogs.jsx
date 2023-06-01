import React, {useEffect, useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
// import PropTypes from 'prop-types';
import {AppContext} from '../components/App';
import Dog from '../components/Dog';



const MyDogs = (props) => {
  const {dogList} = props;
  const { currentUser } = useContext(AppContext);
  const [myDogs, setMyDogs] = useState([]);
  useEffect(() => {
    if(dogList !== null){
      const myDogsList = dogList.filter(dog => dog.ownerId === currentUser.id);
      setMyDogs(myDogsList);
    }
  }, [dogList, currentUser])
  console.log(myDogs, currentUser);
  // const myDogs = dogList.filter(dog => dog.ownerId === currentUser.id)
  const { route } = useAuthenticator((context) => [context.route]);

  

  const dogCardStyle = {
    border: 'solid 2px black',
    padding: '10px',
    width: '400px',
    margin: '13px',
    height: '200px', 
    background: 'rgba(219, 219, 219)'
  }
  const linkStyle = {
    textDecoration: 'none',
    color: 'black', 
   
  }
  
  return dogList ? (
    <div>
    
      <h1>Your dogs</h1>
      <div>
        
        {myDogs.map((dog) => 
          <div style={dogCardStyle} className='card' key={dog.id}>
            <Link to={`/dog/${dog.id}`} style={linkStyle}>
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
      </div>
    </div>
  ) : null;
}

export default MyDogs;