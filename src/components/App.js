import React from 'react';
import Header from './Header';
import DogParkControl from './DogParkControl';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator, Button} from '@aws-amplify/ui-react';
import background from '../Img/background.jpg';
import headerImg from '../Img/headerImg.jpg';

function App({signOut}) {
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
   <React.Fragment>
    <div style={topStyle}>
      <div style={headerStyle}>
        <Header />
      </div>
      <div style={signOutStyle}>
        <Button onClick={signOut}>Sign Out</Button>
      </div>
    </div>
    <div style={landingPageStyle}>
      <DogParkControl/>
      <br/>
      <br/>
      <br/>
      <br/>
      
    </div>
    </React.Fragment>
    
  );
}

export default withAuthenticator(App);
//return to see if app can be wrapped and only accessed through sign in.