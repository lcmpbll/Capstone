import React from 'react';
import PropTypes from 'prop-types'

function Dog(props){
  return(
    <React.Fragment>
      <div onClick = {() => props.whenDogClicked(props.id)} >
        <div>
          <h1>{props.dogName}</h1>
        </div>
        <div>
          <h4>Dog weight: {props.dogWeight}</h4>
          <h4>Dog's gender:{props.dogSex}</h4>
          
        </div>
        <div>
          <div> 
            {/* may change to tables */}
            <h3>Dog's dislikes</h3>
            <ul>
              <li>{props.dogDislikes}</li>
            </ul>
          </div>
          <div>
            <h4>Dog's likes:</h4>
            <ul>
              <li>{props.dogLikes}</li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Most Frequently visited parks:</h3>
          <ul>
            <li>{props.dogParks}</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

Dog.propTypes = {
  dogName: PropTypes.string.isRequired,
  dogSize: PropTypes.string,
  dogWeight: PropTypes.number,
  dogAge: PropTypes.number,
  dogAgeGroup: PropTypes.string,
  dogSex: PropTypes.string,
  dogLikes: PropTypes.array,
  dogDislikes: PropTypes.array,
  dogParks: PropTypes.array,   //may switch to obj
  atThePark: PropTypes.bool,
  id: PropTypes.string,
  
  
}

export default Dog;

