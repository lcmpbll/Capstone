import React from 'react';
import Dog from './Dog';
const mainDogList = [
  {
    dogName: 'Dolph',
    dogSex: 'Male',
    dogWeight: 35,
    dogDislikes: ["childern"],
    dogLikes: ["Big dogs"],
    dogParks: ["Alberta"]
  },
  {
    dogName: 'Angus',
    dogSex: 'Male',
    dogWeight: 150,
    dogDislikes: ["Small Dogs", " Rude People"],
    dogLikes: ["Sticks"],
    dogParks: ["Fremont"]
  },
  {
    dogName: 'Sweetie',
    dogSex: 'Female',
    dogWeight: 12,
    dogDislikes: ["Big Dogs"],
    dogLikes: ["Loud Noises"],
    dogParks: ["Alberta"]
  }
]
function DogList(){
  return (
    <React.Fragment>
      {mainDogList.map((dog, index) =>
      <Dog dogName={dog.dogName}
      dogSex={dog.dogSex}
      dogWeight={dog.dogWeight}
      dogDislikes={dog.dogDislikes}
      dogLikes={dog.dogLikes}
      dogParks={dog.dogParks}/>
      )}
    </React.Fragment>
  );
}

export default DogList;