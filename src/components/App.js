import React, { useState, createContext } from 'react';
import Header from './Header';
import DogList from '../scenes/DogList';
import { RequireAuth } from '../components/RequireAuth';
import Login from '../scenes/Login';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator, useAuthenticator, Button} from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import background from '../Img/background.jpg';
import headerImg from '../Img/headerImg.jpg';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NewDogForm from '../scenes/NewDogForm';
import DogDetail from '../scenes/DogDetail';
import NotFound from '../scenes/NotFound';
import Sidebar from './Menu';

export const AppContext = createContext();

function MyRoutes() {
const [currentUser, setCurrentUser] = useState(null);
const [error, setError] = useState(null);
const {route, signOut} = useAuthenticator((context) => [
  context.route,
  context.signOut
]);
const navigate = useNavigate();

  
  
  const getCurrentUser = async () => {
    
    await Auth.currentUserInfo().then(response => {
      setCurrentUser(response);
      if(!response.ok){
        throw new Error(`${response.status}: ${response.statusText}`);
      }
    }).catch((error) => {
      setError(error.message)
    });
  };
  
  if (currentUser === null) {
    getCurrentUser()
  }
  
  

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
              {route === 'authenticated' ? (
                  <Button onClick={signOut}>Sign Out</Button>
                ):(
                  <Button onClick={() => navigate('/login')}>Login</Button> 
                )
              }
            </div>
          </div>
          <div style={landingPageStyle}>
            <AppContext.Provider value={{currentUser}}>
              <Routes>
                <Route exact path='/' element={<DogList/>}/>
                <Route exact path='/addDog' element={
                  <RequireAuth>
                    <NewDogForm/>
                  </RequireAuth>
                }/>
                <Route exact path="/dog/:id" element={
                  <RequireAuth>
                    <DogDetail/>
                  </RequireAuth>
                }/>
                <Route path='/login' element={<Login/>} />
                <Route element={<NotFound/>}/>
                
              </Routes>
            </AppContext.Provider>
            
          
          </div>
        </>

    
  );
}

export function App() {
  return(
    <Authenticator.Provider>
      <MyRoutes/>
    </Authenticator.Provider>
  )
}


//return to see if app can be wrapped and only accessed through sign in.
// dog={dogList.filter((dog) => (dog.id) === (match.params.id))}