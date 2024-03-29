import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import FullMenu from './FullMenu';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  let fullMenu = null;
  if(isCollapsed){
    fullMenu = <FullMenu/>
  }
  return (
    
    <div collapsed={isCollapsed}>
      <div >
        <AiOutlineMenu onClick={() => setIsCollapsed(!isCollapsed)}/>
      </div> 
      <div sx={{position: 'fixed', width: '30%', height: '100vh'}}>
        {fullMenu}
      </div>
    </div>  
    
  )
}

export default Sidebar;