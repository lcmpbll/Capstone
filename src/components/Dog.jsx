import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import profileImg from '../Img/dogMedia.jpeg';


const Dog = (props) => {
  
  const [isFlipped, setIsFlipped] = useState(true);
  
  return(
    <>
    {props.isNonMobile ? 
      <div >
        <div> 
        <div sx={{flex: 1}}>
         <h3>{props.dogName}</h3>
        </div>
        <div style={{flex: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <div style={{margin: 0, padding: 0}}>
            <p>Size: {props.dogSize}</p>
            <p>Gender: {props.dogSex}</p>
            <p>Age group: {props.dogAgeGroup}</p>
          </div>
          <div>
            <img src={profileImg}  width='100px' height='100px' alt="Dog profile placeholder."/>
          </div>
        </div>
        </div>
      </div>
      
      : <div>
        {isFlipped ? 
          <div onClick={() => setIsFlipped(!isFlipped)} style={{display: 'flex', flexDirection: 'row', flex: 2, justifyContent: 'space-between', alignItems: 'flex-end'}}>
            <h5 style={{flex: 1, width: '50%', height: '100%'}}>{props.dogName}</h5>
            <div style={{flex: 1}}>
                <img src={profileImg}  width='50px' height='50px' alt="Dog profile placeholder."/>
            </div>
          </div>
          :     
          <div onClick={() => setIsFlipped(!isFlipped)} style={{display: 'flex', flexDirection: 'row', flex: 3, alignItems: 'center', height: '100px', justifyContent: 'space-between'}}>
            <div style={{margin: '2px', padding: '3px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignContent: 'space-between'}}>
              <Link to={`/dog/${props.id}`} style={{color: 'black'}}>
                <h4 style={{ margin: '0px 10px 10px 0px'}}>{props.dogName}</h4>
              </Link>
              <img src={profileImg}  width='50px' height='50px' alt="Dog profile placeholder."/>
            </div>
            <div style={{flex: 1, fontSize: '10px', margin: '2px', width: '100%', textOverflow: 'noWrap'}}>
              <p>Size: {props.dogSize}</p>
              <p>Gender: {props.dogSex}</p>
              <p>Age group: {props.dogAgeGroup}</p>
            </div>
          </div> 
        }
  
      </div>}
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

