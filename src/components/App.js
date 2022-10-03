import React from 'react';
import Header from './Header';
import DogParkControl from './DogParkControl';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator, Button} from '@aws-amplify/ui-react';

function App({signOut}) {
  return (
   <React.Fragment>
    <Header />
    <DogParkControl/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Button onClick={signOut}>Sign Out</Button>
    </React.Fragment>
    
  );
}

export default withAuthenticator(App);
//return to see if app can be wrapped and only accessed through sign in.