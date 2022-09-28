import React from 'react';


function AtThePark(props){
  console.log(props);
  
  return(
    <React.Fragment>
      <h1>Dogs at Alberta Park</h1>
      {props.atTheParkList.map((dog, index) =>
        <h1 key={index}>{dog.dogName}</h1>
      )}
    </React.Fragment>
  );
}

export default AtThePark;