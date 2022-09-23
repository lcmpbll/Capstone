import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

function NewDogForm() {
  const [dogLikesList, setDogLikesList] = useState({
    dogLikes: [], likesResponse: [],
  });
  const [dogSex, setDogSex] = useState({
    selectedSex: '', dogSexResponse: '',
  });
  
  const handleSexValueChange = (event) => {
    const {selectedSexOption, checked} = event.target;
    const { selectedSex } = dogSex;
    console.log(`${selectedSexOption} is ${checked}`);
    if(checked){
      setDogSex({
        dogSex: selectedSexOption,
      });
    } else {
      setDogSex({
        dogSex: ''
      });
    }
  };
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
  onSexChange(event){
    
  }
  function handleNewDogFormSubmission(event) {
    event.preventDefault();
    props.onNewDogCreation({
      dogName: event.target.dogName.value,
      dogWeight: event.target.dogWeight.value,
      dogSize: calculateDogSize(dogWeight),
      dogYears: event.target.dogYears.value,
      dogMonths: event.target.dogMonths.value,
      dogAge: calculateDogAge(dogYears, dogMonths),
      dogAgeGroup: calculateDogAgeGroup(dogAge),
      dogSex: event.target.selectedSexOption.value,
      dogLikes: handleLikesListChange(event),
      dogDisLikes: event.target.dogDisLikes.value === checked,
      dogParks: event.target.dogParks.value,
      id: v4(),
    });
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
              <input type='radio' value='Female' name='dogSex'checked={selectedSexOption === 'Female'} onChange={handleSexValueChange}/>Female
            </div>
            <div className='radioButton'>
              <input type='radio' value='Male' name='dogSex' checked={seletedSexOption === 'Male'} onChange={handleSexValueChange}/>Male
            </div>
          </div>
          <div className='checkBoxSelectionLikes row'>
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
          <label htmlFor='dogDislikes'>My dog doesn't like:</label>
          <input type='text' name='dogDislikes' placeholder="Things my dog doesn't like"/>
          <button type='submit' className='btn btn-default'>Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default NewDogForm;