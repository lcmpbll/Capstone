import React, {useState, useContext, useEffect} from 'react';
import { AppContext } from '../components/App'
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {v4} from 'uuid';
import { addDog } from '../functions/apihelper';
import {useAuthenticator} from '@aws-amplify/ui-react';

const  NewDogForm = (props) => {
  const navigate = useNavigate();
  const { route } = useAuthenticator((context) => [context.route]);
  const { currentUser } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    
    if(currentUser?.id !== undefined){
      setIsLoading(false);
    }   
  }, 3000)
  const [dogLikesList, setDogLikesList] = useState({
    dogLikes: [], likesResponse: [],
  });
  const [selectedSex, setSelectedSex] = useState({
    dogSex: 'Female', dogSexResponse: 'Female',
  });
  const [dogDislikesList, setDogDislikesList] = useState({
    dogDislikes: [], dislikesResponse: [],
  });
  
  
  const handleSexValueChange = (event) => {
    const {value, checked} = event.target;
    const { dogSex } = selectedSex;
    if(checked){
      setSelectedSex({
        dogSex: value,
      });
    } else {
      setSelectedSex({
        dogSex: ' ',
      });
    }
    return dogSex;
  };
  
  const handleDislikesListChange = (event) => {
    const { value, checked } = event.target;
    const {dogDislikes } = dogDislikesList;
    if(checked) {
      setDogDislikesList({
        dogDislikes: [...dogDislikes, value],
        dislikesResponse: [...dogDislikes, value],
      });
    } else {
      setDogDislikesList({
        dogDislikes: dogDislikes.filter((event) => event !== value),
        dislikesResponse: dogDislikes.filter((event) => event !== value),
      });
    }
    return dogDislikes;
  }
  const handleLikesListChange = (event) => {
    const { value, checked } = event.target;
    const { dogLikes } = dogLikesList;
    if(checked) {
      setDogLikesList({
        dogLikes: [...dogLikes, value],
        likesResponse: [...dogLikes, value],
      });
    } else {
      setDogLikesList({
        dogLikes: dogLikes.filter((event) => event !== value),
        likesResponse: dogLikes.filter((event) => event !== value),
      });
    }
    return dogLikes;
  };
  
  function calculateDogSize(dogLbs) {
    if(dogLbs <= 22){
      const dogSize = 'small';
      return dogSize;
    } else if(dogLbs <= 57){
      const dogSize = 'medium';
      return dogSize;
    }else if(dogLbs <= 99){
      const dogSize = 'large';
      return dogSize;
    }else{
      const dogSize = 'giant'
      return dogSize;
    }
  }
  
  function calculateDogAge(dogYears, dogMonths){
    if(dogYears === null){
      dogYears = 0;
    }
    if(dogMonths === null){
      dogMonths = 0;
    }
    const dogAge = (dogYears + (dogMonths/12));
    const dogIntAge = Math.floor(dogAge * 100);
    return dogIntAge;
  }
  
  function calculateDogAgeGroup(dogYrs){
    if(dogYrs <= 35){
      const dogAgeGroup = 'Young Puppy';
      return dogAgeGroup;
    }else if(dogYrs <= 50){
      const dogAgeGroup = 'Puppy';
      return dogAgeGroup;
    }else if(dogYrs <= 100){
      const dogAgeGroup = 'Juvenile';
      return dogAgeGroup;
    }else if(dogYrs <= 200){
      const dogAgeGroup = 'Young Adult';
      return dogAgeGroup;
    }else if(dogYrs <= 700){
      const dogAgeGroup = 'Adult';
      return dogAgeGroup;
    }else if(dogYrs <= 1100){
      const dogAgeGroup = 'Senior';
      return dogAgeGroup;
    }else{
      let dogAgeGroup = 'Geriatric';
      return dogAgeGroup;
    }
  }
  
  const handleAddingNewDogToList = async (newDog) => {
    await addDog(newDog)
     
    
  };
  
  const onNewDogCreation = (event) => {
    const newDog = {
       dogName: event.target.dogName.value,
       dogWeight: parseInt(event.target.dogWeight.value),
       dogSize: calculateDogSize(parseInt(event.target.dogWeight.value)),
       dogYears: parseInt(event.target.dogYears.value),
       dogMonths: parseInt(event.target.dogMonths.value),
       dogAge: calculateDogAge(parseInt(event.target.dogYears.value), parseInt(event.target.dogMonths.value)),
       dogAgeGroup: calculateDogAgeGroup(calculateDogAge(parseInt(event.target.dogYears.value), parseInt(event.target.dogMonths.value))),
       dogSex: handleSexValueChange(event),
       dogLikes: handleLikesListChange(event),
       atThePark: false,
       startTimeAtPark: null,
       friendsArray: [],
       dogDislikes: handleDislikesListChange(event),
       dogParks: 'Alberta Park',
       id: v4(),
       ownerId: currentUser?.id,
     }
     return newDog;
 };
  
  //Gather input from form
  
  function handleNewDogFormSubmission(event) {
    event.preventDefault();
    const newDog = onNewDogCreation(event);
    handleAddingNewDogToList(newDog);
    navigate('/');
    
  }
  
  //Form styles
  
  const newDogFormStyle ={
    justifyContent: 'center',
    padding: '10px',
    
    
    margin:  'auto',
    width: '50%',
  }
  const innerDogFormStyle = {
    marginTop: '100px',
    border: 'solid 2px black',
    padding: '20px',
    background: 'rgba(219, 219, 219, 0.8)',
    marginLeft: '100px',
    fontWeight: 'bold',
    position: 'relative',
  }

  const homeButtonStyle = {
    marginLeft: '20%',
    
  }
    return (
      <>
        <div style={newDogFormStyle}>
          <div style={innerDogFormStyle}>
          <form onSubmit={handleNewDogFormSubmission}>
            <label htmlFor="dogName">Dog's Name:</label> &nbsp;
            <input type='text' name='dogName' placeholder="Your dog's name" />
            <br/>
            <br/>
            <label htmlFor='dogWeight'>Dog's weight in lbs:</label> &nbsp;
            <input type='number' name='dogWeight' placeholder='lbs' required/>
            <br/>
            <br/>
            <label htmlFor='dogYears'>Dog's age:</label> &nbsp;
            <input type='number' name='dogMonths' placeholder='months' required/> &nbsp;
            <input type='number' name='dogYears' placeholder='years' required/>
            <br/>
            <br/>
            <div className='radioSection'>
              <label htmlFor='dogSex'>Dog's gender:</label>
              <div className='radioButton'>
                <input type='radio' value='Female' name='dogSex' onChange={handleSexValueChange}/>Female
              </div>
              <div className='radioButton'>
                <input type='radio' value='Male' name='dogSex'  onChange={handleSexValueChange}/>Male
              </div>
            </div>
            <br />
            <div className='checkBoxSelectionLikes row'>
              <label htmlFor="DogLikes"> Dog's likes:</label>
                <div className='col-md-6'>
                  <div className='form-check m-3'>
                    <input className='form-check-likes' type='checkbox' name='dogLikes' value='puppies' onChange={handleLikesListChange}/>
                    <label className='form-check-label'>Puppies</label>
                  </div>
                  <div className='form-check m-3'>
                    <input className='form-check-likes' type='checkbox' name='dogLikes' value='children' onChange={handleLikesListChange}/>
                    <label className='form-check-label'>Children</label>
                  </div>
                </div>
              </div>
              <br />
              <div className='checkBoxSelectionDislikes row'>
                <label htmlFor="DogDislikes">Dog's dislikes:</label>
                <div className='col-md-6'>
                  <div className='form-check m-3'>
                    <input className='form-check-dislikes' type='checkbox' name='dogDislikes' value='puppies' onChange={handleDislikesListChange}/>
                    <label className='form-check-label'>Puppies</label>
                  </div>
                  <div className='form-check m-3'>
                    <input className='form-check-dislikes' type='checkbox' name='dogDislikes' value='children' onChange={handleDislikesListChange}/>
                    <label className='form-check-label'>Children</label>
                  </div>
                </div>
                <br/>
                {/* <div className='form-check m-3'>
                  <label>Add your dog's friends:</label> &nbsp;
                  <select onChange={handleFriendChange}>
                    <option value='none'>--Select a friend for your dog--</option>
                    {Object.entries(dogList).map((dogs) => <option key={dogs.id} value={dogs.id}>{dogs.dogName}</option>)}
                  </select>
                </div> */}
              </div>
              <br />
              {/* <label htmlFor='dogParks'>My dog's favorite Park:</label>
              <input type='text' name='dogParks' placeholder='Alberta Park' /> */} 
              <button type='submit' className='btn btn-default'>Submit</button>
            </form>
          </div>
        </div>
        <button style={homeButtonStyle}><Link to={'/'} style={{textDecoration: 'none', color: 'black'}}>Home</Link></button>
      </>
    );
  
}

NewDogForm.propTypes = {
  onNewDogCreation: PropTypes.func,
  mainDogList: PropTypes.array,
}



export default NewDogForm;