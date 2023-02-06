import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('dogPark');
  
  return (
    <div collapsed={isCollapsed}>
      <div >
        <AiOutlineMenu onClick={() => setIsCollapsed(!isCollapsed)}/>
      </div> 
      <div>
        <div>
          <Link to={"/addDog"} style={{ color: 'black'}}>Add new Dog</Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;