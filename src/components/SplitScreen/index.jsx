import React from 'react';
import { Box } from '@mui/material'

export const SplitScreen = ({
  children,
  leftWeight = 1,
  rightWeight = 1,
}) => {
  const [left, right] = children;
  return (
    <Box sx={{display: 'flex', flexDirection: 'row'}}>
      <Box sx={{flex: leftWeight}} >
        {left}
      </Box>
      <Box sx={{flex: rightWeight}}>
        {right}
      </Box>
    </Box>
  );
}