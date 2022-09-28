import React from 'react';
import Dog from './Dog';
import PropTypes from 'prop-types';
const mainDogList = [
  {
    dogName: 'Dolph',
    dogSex: 'Male',
    dogWeight: 35,
    dogDislikes: ["childern"],
    dogLikes: ["Big dogs"],
    dogParks: ["Alberta"],
    id: 'jncouwirh8'
  },
  {
    dogName: 'Angus',
    dogSex: 'Male',
    dogWeight: 150,
    dogDislikes: ["Small Dogs", " Rude People"],
    dogLikes: ["Sticks"],
    dogParks: ["Fremont"],
    id: 'okjncoiw34'
  },
  {
    dogName: 'Sweetie',
    dogSex: 'Female',
    dogWeight: 12,
    dogDislikes: ["Big Dogs"],
    dogLikes: ["Loud Noises"],
    dogParks: ["Alberta"],
    id: 'jdfhuhe222'
  }
]
function DogList(props){
  return (
    <React.Fragment>
      <h1>All Dogs</h1>
      {(Object.values(props.dogList).map((dog) =>
      <div className='card' key={dog.id}>
        <Dog 
        whenDogClicked={props.onDogSelection}
        dogName={dog.dogName}
        dogSex={dog.dogSex}
        dogWeight={dog.dogWeight}
        dogDislikes={dog.dogDislikes}
        dogLikes={dog.dogLikes}
        dogParks={dog.dogParks}
        id={dog.id}
        key={dog.id}
        />
      </div>
      ))}
    </React.Fragment>
  );
}

DogList.propTypes = {
  dogList: PropTypes.array,
  onDogSelection: PropTypes.func
};

export default DogList;