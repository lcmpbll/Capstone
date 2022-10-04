import React from 'react';
import Dog from './Dog';
import PropTypes from 'prop-types';

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
        dogSize={dog.dogSize}
        dogAgeGroup={dog.dogAgeGroup}
        // dogDislikes={dog.dogDislikes}
        // dogLikes={dog.dogLikes}
        // dogParks={dog.dogParks}
        // dogFriends={dog.friendsArray}
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