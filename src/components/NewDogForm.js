import React, {useState} from 'react';
import PropTypes from 'prop-types';

function NewDogForm() {
  const [dogLikesList, setDogLikesList] = useState({
    dogLikes: [], likesResponse: [],
  });
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
      dogWeight: event.target.dogWeight.value,
      dogSize: calculateDogSize(dogWeight),
      dogYears: event.target.dogYears.value,
      dogMonths: event.target.dogMonths.value,
      dogAge: calculateDogAge(dogYears, dogMonths),
      dogAgeGroup: calculateDogAgeGroup(dogAge),
      dogSex: event.target.dogSex.value,
      dogLikes: event.target
    })
  }
}