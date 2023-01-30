import React from 'react';
import PropTypes from 'prop-types'
import profileImg from '../Img/dogMedia.jpeg';

const Dog = (props) => {
  
  //Styles
  const mainDogStyles = {
    display: 'flex',
    width: '350px',
    height: '200px',
  }
  const statsStyle = {
    margin: 'auto',
    marginRight: '5px',
  }
  
  const profileImageStyles = {
    position: 'relative',
    left: '25px',
    margin: 'auto',
    border: '5px solid-black',
  }
  
  const picAndStatsStyles = {
    display: 'flex',
    marginTop: '10px',
    width: '100%',
    fontWeight: 'bold',
  }
  
  const nameStyles = {
    position: 'relative',
    marginRight: '5px',
    justifyContent: 'center',
  }
  
  return(
    <>
      <div style={mainDogStyles} onClick = {() => props.whenDogClicked(props.id)} >
        <div style={nameStyles}>
          <h3>{props.dogName}</h3>
        </div>
        <div style={picAndStatsStyles}>
          <div style={statsStyle}>
            <p>Size: {props.dogSize}</p>
            <p>Gender: {props.dogSex}</p>
            <p>Age group: {props.dogAgeGroup}</p>
          </div>
          <div style={profileImageStyles}>
            <img src={profileImg}  width='100px' height='100px' alt="Dog profile placeholder."/>
          </div>
        </div>
      </div>
        {/* <div> */}
          {/* <div>  */}
            {/* may change to tables */}
            {/* <h3>Dog's dislikes</h3>
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
        <div>
          <h3>Friends</h3>
          <ul>
            <li>{props.friendsArray}</li>
          </ul>
        </div>
      </div> */}
    </>
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
  dogParks: PropTypes.string,   //may switch to obj
  atThePark: PropTypes.bool,
  ownerId: PropTypes.string,
  friendsArray: PropTypes.array,
  id: PropTypes.string,
  
  
}

export default Dog;

