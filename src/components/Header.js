import React from 'react';
import Sidebar from './navigation';

function Header(){
  const headerStyles = {
    textAlign: 'center',
  }
  const sidebarStyle = {
    justifySelf: 'start'
  }
  return(
    <>
      <Sidebar style={sidebarStyle}/>
      <h1 style={headerStyles}>Dog Bark</h1>
    </>
  );
}

export default Header;