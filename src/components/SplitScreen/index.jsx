import React from 'react';
import { Box } from '@mui/material'

export const SplitScreen = ({
  children,
  leftWeight = 1,
  rightWeight = 1,
}) => {
  const [left, right] = children;
  return (
    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
      <Box sx={{flex: leftWeight, margin: 'auto'}} >
        {left}
      </Box>
      <Box sx={{flex: rightWeight}}>
        {right}
      </Box>
    </Box>
  );
}