import React, { useState, useEffect } from 'react';
import Header from './Header';
import DogList from '../scenes/DogList';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator, Button} from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import background from '../Img/background.jpg';
import headerImg from '../Img/headerImg.jpg';
import { Routes, Route } from 'react-router-dom';
import NewDogForm from '../scenes/NewDogForm';
import DogDetail from '../scenes/DogDetail';
import NotFound from '../scenes/NotFound';
import Sidebar from './Menu';



function App({signOut}) {
const [currentUser, setCurrentUser] = useState(null);
const [error, setError] = useState(null);

  useEffect(() =>{
    getCurrentUser();
  }, []);
  const getCurrentUser = async () => {
    
    await Auth.currentUserInfo().then(response => {
      console.log(response, 'response');
      if(!response.ok){
        throw new Error(`${response.status}: ${response.statusText}`);
      }else{
        return response.json();
      }
    }).then((jsonifiedResponse) => {
      setCurrentUser(jsonifiedResponse);
      console.log(jsonifiedResponse);
    }).catch((error) => {
      setError(error.message)
    });
  };
  
  // .then(response => {
  //   console.log(response);
  //   if(!response.ok) {
  //     throw new Error(`${response.status}: ${response.statusText}`);
  //   } else {
  //     return response.json()
  //   }
  // })
  // .then((jsonifiedResponse) => {
  //   setAllParks(jsonifiedResponse)
  //   console.log(jsonifiedResponse);
  //   setIsLoaded(true)
  // })
  // .catch((error) => {
  //   setError(error.message)
  //   setIsLoaded(true)
  // });
  
 console.log(currentUser, 'ln 31');
  //styles
  const landingPageStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
  }
  const headerStyle = {
    textAlign: 'center',
    justifyContent: 'center',
    margin: 'auto',
  }
  
  const signOutStyle = {
    
    position: 'absolute',
    top: '30px',
    right: '10px',
  }
  const topStyle = {
    display: 'grid',
    gridTemplateColums: '1fr 2fr 1fr',
    backgroundImage: `url(${headerImg})`,
    width: '100vw',
    padding: '20px'
  }
  const sidebarStyle = {
    position: 'absolute',
    top: '30px',
    margin: '20px',
  }
  return (
   <>
      <div style={topStyle}>
        <div style={headerStyle}>
          <Header />
        </div>
          <Sidebar style={sidebarStyle} />
        <div style={signOutStyle}>
          <Button onClick={signOut}>Sign Out</Button>
        </div>
      </div>
      <div style={landingPageStyle}>
        <Routes>
          <Route exact path='/' element={<DogList/>}/>
          <Route exact path='/addDog' element={<NewDogForm/>}/>
          <Route exact path="/dog/:id" element={<DogDetail/>}/>
          <Route element={<NotFound/>}/>
          
        </Routes>
        
      
      </div>
    </>
    
  );
}

export default withAuthenticator(App);
//return to see if app can be wrapped and only accessed through sign in.
// dog={dogList.filter((dog) => (dog.id) === (match.params.id))}