import React from 'react';
import Header from './Header';
import DogParkControl from './DogParkControl';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator, Button} from '@aws-amplify/ui-react';
import background from '../Img/background.jpg';

function App({signOut}) {
  const landingPageStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
  }
  return (
   <React.Fragment>
    <Header />
    <div style={landingPageStyle}>
      <DogParkControl/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Button onClick={signOut}>Sign Out</Button>
    </div>
    </React.Fragment>
    
  );
}

export default withAuthenticator(App);
//return to see if app can be wrapped and only accessed through sign in.