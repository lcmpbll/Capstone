import React from 'react';
import PropTypes from 'prop-types';

function Park(props){
  const { atTheParkList } = props;
  let numberOfDogsAtThePark = atTheParkList.length;
  

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
  
  console.log(numberOfDogsAtThePark);
  //Properties to caluclate
  const totalDogSize = calculateAverageSize(atTheParkList);
  console.log(totalDogSize);
  
  return(
    <React.Fragment>
      <div>
        <p>Total checked in dogs: {numberOfDogsAtThePark}</p>
        <p>{totalDogSize}</p>
      </div>
    </React.Fragment>
  )
  
}

export default Park;

Park.propTypes = {
  atTheParkList: PropTypes.array,
  
}