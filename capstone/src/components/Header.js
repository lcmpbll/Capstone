import React from 'react';

function Header(){
  const headerStyles = {
    textAlign: 'center',
  }
  return(
    <React.Fragment>
      <h1 style={headerStyles}>Dog Bark</h1>
    </React.Fragment>
  );
}

export default Header;