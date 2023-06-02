import React from 'react';
import { Box } from '@mui/material';

const SwipeScreen = ({
    children,

  }) => {
    const [components] = children;
    const totalScenes = children.length;
    const currentView = children[0];
    console.log(totalScenes);
    return (
      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        {currentView}
      </Box>
    );
  }


export default SwipeScreen