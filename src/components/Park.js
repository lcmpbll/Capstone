import React from 'react';
import PropTypes from 'prop-types';

function Park(props){
  const { atTheParkList } = props;
  let numberOfDogsAtThePark = atTheParkList.length;
  
  const calculateAverageAge = (atTheParkList) => {
    let puppies = 0; let youngAdults = 0;
    let adults = 0; let oldDogs = 0;
    for(let i = 0; i < atTheParkList.length; i ++){
      if(atTheParkList[i].dogAgeGroup === 'Puppy' || atTheParkList[i].dogAgeGroup === 'Prevaccinated puppy'){
        puppies ++;
        console.log(puppies);
      } else if (atTheParkList[i].dogAgeGroup === 'Juvenile' || atTheParkList[i].dogAgeGroup === "Young Adult") {
        youngAdults ++;
      } else if ( atTheParkList[i].dogAgeGroup === 'Adult'){
        adults ++;
      } else if(atTheParkList[i].dogAgeGroup === 'Senior' || atTheParkList[i].dogAgeGroup === "Geriatric") {
        oldDogs ++;
      }
    }
    if(puppies > youngAdults && puppies > adults && puppies > oldDogs){
      return 'Mostly Puppies';
    } else if (youngAdults > adults && youngAdults > oldDogs){
      return 'Mostly younger dogs';
    } else if (adults > oldDogs){
      return 'Lot of adult dogs here';
    } else if(oldDogs > adults){
      return "It's practically the senior center";
    } else {
      return "It's difficult to tell..."
    }
  }
  const calculateAverageSize = (atTheParkList) => {
    let smallDogCount = 0; let medDogCount = 0; 
    let largeDogCount = 0; let giantDogCount = 0;
    let dogSizeString = '';
    for(let i = 0; i < atTheParkList.length; i ++){
      if(atTheParkList[i].dogSize === 'small'){
        smallDogCount += 1;
      } else if (atTheParkList[i].dogSize === 'medium') {
        medDogCount += 1;
      } else if (atTheParkList[i].dogSize === 'large') {
        largeDogCount += 1;
      } else if (atTheParkList[i].dogSize === 'giant'){
        giantDogCount += 1
      }
    } 
    return dogSizeString.concat('Small dogs: ' + smallDogCount + ' Medium dogs: ' + medDogCount + ' LargeDogs: ' + largeDogCount + ' GiantDogs: ' + giantDogCount);
  }
  
  //Properties to caluclate
  const totalDogSize = calculateAverageSize(atTheParkList);
  const averageDogAge = calculateAverageAge(atTheParkList);
  console.log(averageDogAge);
  
  return(
    <React.Fragment>
      <div>
        <p>Total checked in dogs: {numberOfDogsAtThePark}</p>
        <p>{totalDogSize}</p>
        <p>Average Age: {averageDogAge}</p>
      </div>
    </React.Fragment>
  )
  
}

export default Park;

Park.propTypes = {
  atTheParkList: PropTypes.array,
  
}