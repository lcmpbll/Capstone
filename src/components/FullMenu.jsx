import React from 'react';
import { Link } from 'react-router-dom';

const FullMenu = () => {
  return (
    <div style={{width: '20%', position: 'relative'}}>
      <Link to={"/"} style={{ color: 'black'}}>Home</Link><br/>
      <Link to={"/addDog"} style={{ color: 'black'}}>Add new Dog</Link><br/>
      
    </div>
  );
};

export default FullMenu;

