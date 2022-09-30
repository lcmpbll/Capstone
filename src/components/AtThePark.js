import React from 'react';



function AtThePark(props){
  console.log(props);
  
  return(
    <React.Fragment>
      <h1>Dogs at Alberta Park</h1>
      {props.atTheParkList.map((dog) =>
      <div key={dog.id}>
       <h1>{dog.dogName}, is at the park</h1>
       {/* <button onClick = {() => props.whenDogFriendClicked(dog.id)}>Add as a friend</button>
       May add this back in, but for now going to use edit dog to add to dogFriends */}
       <br/>
       </div>
      )}
    </React.Fragment>
  );
}

export default AtThePark;