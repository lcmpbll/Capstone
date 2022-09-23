import React from 'react';
import Dog from './Dog';
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
function DogList(){
  return (
    <React.Fragment>
      {mainDogList.map((dog) =>
      <div className='card' key={dog.id}>
        <Dog dogName={dog.dogName}
        dogSex={dog.dogSex}
        dogWeight={dog.dogWeight}
        dogDislikes={dog.dogDislikes}
        dogLikes={dog.dogLikes}
        dogParks={dog.dogParks}
        key={dog.id}/>
      </div>
      )}
    </React.Fragment>
  );
}

export default DogList;