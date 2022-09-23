import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

function NewDogForm(props) {
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
    console.log(`${value} is ${checked}`);
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
    console.log(`${value} is ${checked}`);
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
    console.log(`${value} is ${checked}`);
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
  function calculateDogAge(dogMonths, dogYears){
    const dogAge = dogYears + (dogMonths/12);
    return dogAge;
  }
  function calculateDogAgeGroup(dogYrs){
    if(dogYrs <= .35){
      const dogAgeGroup = 'Pre vaccinated puppy';
      return dogAgeGroup;
    }else if(dogYrs <= .5){
      const dogAgeGroup = 'Puppy';
      return dogAgeGroup;
    }else if(dogYrs <= 1){
      const dogAgeGroup = 'Juvenile';
      return dogAgeGroup;
    }else if(dogYrs <= 2){
      const dogAgeGroup = 'Young Adult';
      return dogAgeGroup;
    }else if(dogYrs <= 7){
      const dogAgeGroup = 'Adult';
      return dogAgeGroup;
    }else if(dogYrs <= 11){
      const dogAgeGroup = 'Senior';
      return dogAgeGroup;
    }else{
      let dogAgeGroup = 'Geriatric';
      return dogAgeGroup;
    }
  }
  function handleNewDogFormSubmission(event) {
    event.preventDefault();
    props.onNewDogCreation({
      dogName: event.target.dogName.value,
      dogWeight: parseInt(event.target.dogWeight.value),
      dogSize: calculateDogSize(parseInt(event.target.dogWeight.value)),
      dogYears: parseInt(event.target.dogYears.value),
      dogMonths: parseInt(event.target.dogMonths.value),
      dogAge: calculateDogAge(parseInt(event.target.dogYears.value), parseInt(event.target.dogMonths.value)),
      dogAgeGroup: calculateDogAgeGroup(calculateDogAge(parseInt(event.target.dogYears.value), parseInt(event.target.dogMonths.value))),
      dogSex: handleSexValueChange(event),
      dogLikes: handleLikesListChange(event),
     
      dogDisLikes: handleDislikesListChange(event),
      dogParks: event.target.dogParks.value,
      id: v4(),
    });
  }
    return (
      <React.Fragment>
         <form onSubmit={handleNewDogFormSubmission}>
          <label htmlFor="dogName">Dog's Name:</label>
          <input type='text' name='dogName' placeholder="Your dog's name" />
          <br/>
          <label htmlFor='dogWeight'>Dog's weight in lbs:</label>
          <input type='number' name='dogWeight' placeholder='lbs'/>
          <br/>
          <label htmlFor='dogYears'>Your dog's age:</label>
          <input type='number' name='dogMonths' placeholder='months'/>
          <input type='number' name='dogYears' placeholder='years'/>
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
          <label htmlFor="DogLikes">My dog likes:</label>
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
            <label htmlFor="DogDislikes">My dog doesn't like:</label>
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
          </div>
          <br />
          <label htmlFor='dogParks'>My dog's favorite Park:</label>
          <input type='text' name='dogParks' placeholder='Alberta Park' />
          <button type='submit' className='btn btn-default'>Submit</button>
        </form>
      </React.Fragment>
    );
  
}

NewDogForm.propTypes = {
  onNewDogCreation: PropTypes.func,
}



export default NewDogForm;