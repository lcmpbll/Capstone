import React from 'react';
import PropTypes from 'prop-types';


function DogDetail(props){
  const {dog, onClickingDelete, onClickingFriend, onClickingGo} = props;
  // const [atThePark, setAtThePark] = useState(false);
  // const handleSettingAtPark = (dog) => {
  //   setAtThePark(!atThePark);
  // }
  return(
    <React.Fragment>
      <h1>{dog.dogName}</h1>
      <hr />
      <h2>Stats:</h2>
      <p>Size: {dog.dogSize}</p>
      <p>Weight: {dog.dogWeight}</p>
      <p>Age: {dog.dogAge}</p>
      <hr/>
      <div className='likes'>
        <h2>Likes</h2>
        {dog.dogLikes}
        <hr/>
      </div>
      <div className='dislikes'>
        <h2>Dislikes</h2>
        {dog.dogDislikes}
        <hr/>
      </div>
      <div className='parks'>
        <h2>Parks</h2>
       {dog.dogParks}
       <button onClick={() => onClickingGo(dog.id)} >Go to the park</button>
        <hr />
      </div>
      <br/>
      <div className='buttonControl'>
        <button onClick={() => onClickingFriend(dog.id)}>Make some Dog friends</button>
        <button onClick={()=> onClickingDelete(dog.id)}>Remove Dog</button>
        
      </div>
    </React.Fragment>
  )
}

DogDetail.propTypes = {
  dog: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default DogDetail;
