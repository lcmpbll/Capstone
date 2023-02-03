import React from 'react';
import Header from './Header';
import DogList from '../scenes/DogParkControl';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator, Button} from '@aws-amplify/ui-react';
import background from '../Img/background.jpg';
import headerImg from '../Img/headerImg.jpg';
import { Routes, Route } from 'react-router-dom';
import NewDogForm from '../scenes/NewDogForm';
import DogDetail from '../onHold/DogDetail';
import NotFound from '../scenes/NotFound';



function App({signOut}) {

  

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
  }
  
  const signOutStyle = {
    
    position: 'absolute',
    top: '30px',
    right: '10px',
  }
  const topStyle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: `url(${headerImg})`,
    width: '100vw',
   
    
    
  }
  return (
   <>
      <div style={topStyle}>
        <div style={headerStyle}>
          <Header />
        </div>
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