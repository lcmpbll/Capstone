import React from 'react';
import PropTypes from 'prop-types'

function Dog(props){
  return(
    <React.Fragment>
      <div>
        <div>
          <h1>{props.dogName}</h1>
        </div>
        <div>
          <h2>Dog size in lbs: {props.dogWeight}</h2>
          <h2>Dog's gender:{props.dogSex}</h2>
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
  dogSize: PropTypes.string.isRequired,
  dogWeight: PropTypes.number,
  dogAge: PropTypes.number,
  dogAgeGroup: PropTypes.string,
  dogSex: PropTypes.string,
  dogLikes: PropTypes.array,
  dogDislikes: PropTypes.array,
  dogParks: PropTypes.array,   //may switch to obj
  id: PropTypes.string,
  
  
}

export default Dog;

