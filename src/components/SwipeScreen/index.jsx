import React, {useState} from 'react';
import { Box } from '@mui/material';

const SwipeScreen = ({
    children,

  }) => {
   
    const totalScenes = children.length;
    const [currentViewIndex, setCurrentViewIndex] = useState(0);
    const currentView = children[currentViewIndex];
    const handleSwipe = (swipeDir) => {
      if(currentViewIndex + swipeDir < totalScenes){
        setCurrentViewIndex(currentViewIndex + swipeDir);
      } else {
        setCurrentViewIndex(0);
      }
    }
 
    return (
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          {currentView}
        </Box>
        <Box sx={{position: 'fixed', bottom: '0', width: '100%', marginBottom: '1rem'}}>
         <ScreenSlider sx={{position: 'fixed', bottom: '0'}}currentViewIndex={currentViewIndex} handleSwipe={handleSwipe} totalScenes={totalScenes} />
        </Box>
      </Box>
    );
  }


export default SwipeScreen;


const ScreenSlider = (props) => {
  const {currentViewIndex, handleSwipe, totalScenes} = props;
  let scenes = new Array(totalScenes).fill(0);
  scenes[currentViewIndex] = 1;
 
  return (
    <Box sx={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center'}}>
      <Box onClick={() => handleSwipe(1)} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly',background: 'rgba(219, 219, 219)', border: 'solid 2px #4986e8', borderRadius: '45%', width: '80%', height: '30px', alignItems:'center'}}>
        {scenes.map((scene, index) => { 
          return (
            <SceneCircle scene={scene} key={index}/>
          )
        })}
      </Box>
    </Box>
  )
}

const SceneCircle = (props) => {
  const {scene} = props

  return (
    <Box sx={{display: 'flex', border: 'solid 2px #4986e8', background: scene === 1 ? 'rgba(219, 219, 219)': 'rgba(23, 100, 219)', width: '20px', height: '20px', borderRadius: '100%'}} >
    
    </Box>
  )
}