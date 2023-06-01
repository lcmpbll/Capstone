import React, {useState, useContext, useEffect} from 'react';
import {Box, Button, TextField, FormControl, FormControlLabel, FormGroup, FormLabel, RadioGroup, Radio, Checkbox } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AppContext } from '../components/App'
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {v4} from 'uuid';
import { addDog } from '../functions/apihelper';
import {useAuthenticator} from '@aws-amplify/ui-react';

const  NewDogForm = (props) => {
  const { currentUser } = props;
  
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery('min-width: 600px');
  const { route } = useAuthenticator((context) => [context.route]);
  const { currentUser } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    
    if(currentUser?.id !== undefined){
      setIsLoading(false);
    }   
  }, 3000)
  const [dogLikesList, setDogLikesList] = useState({
    dogLikes: [], likesResponse: [],
  });
  const [selectedSex, setSelectedSex] = useState({
    dogSex: 'Female', dogSexResponse: 'Female',
  });
  const [dogDislikesList, setDogDislikesList] = useState({
    dogDislikes: [], dislikesResponse: [],
  });
  
  
  const handleSexValueChange = (event) => {
    const {value, checked} = event.target;
    const { dogSex } = selectedSex;
    if(checked){
      setSelectedSex({
        dogSex: value,
      });
    } else {
      setSelectedSex({
        dogSex: ' ',
      });
    }
    return dogSex;
  };
  
  const handleDislikesListChange = (event) => {
    const { value, checked } = event.target;
    const {dogDislikes } = dogDislikesList;
    if(checked) {
      setDogDislikesList({
        dogDislikes: [...dogDislikes, value],
        dislikesResponse: [...dogDislikes, value],
      });
    } else {
      setDogDislikesList({
        dogDislikes: dogDislikes.filter((event) => event !== value),
        dislikesResponse: dogDislikes.filter((event) => event !== value),
      });
    }
    return dogDislikes;
  }
  const handleLikesListChange = (event) => {
    const { value, checked } = event.target;
    const { dogLikes } = dogLikesList;
    if(checked) {
      setDogLikesList({
        dogLikes: [...dogLikes, value],
        likesResponse: [...dogLikes, value],
      });
    } else {
      setDogLikesList({
        dogLikes: dogLikes.filter((event) => event !== value),
        likesResponse: dogLikes.filter((event) => event !== value),
      });
    }
    return dogLikes;
  };
  
  function calculateDogSize(dogLbs) {
    if(dogLbs <= 22){
      const dogSize = 'small';
      return dogSize;
    } else if(dogLbs <= 57){
      const dogSize = 'medium';
      return dogSize;
    }else if(dogLbs <= 99){
      const dogSize = 'large';
      return dogSize;
    }else{
      const dogSize = 'giant'
      return dogSize;
    }
  }
  
  function calculateDogAge(dogYears, dogMonths){
    if(dogYears === null){
      dogYears = 0;
    }
    if(dogMonths === null){
      dogMonths = 0;
    }
    const dogAge = (dogYears + (dogMonths/12));
    const dogIntAge = Math.floor(dogAge * 100);
    return dogIntAge;
  }
  
  function calculateDogAgeGroup(dogYrs){
    if(dogYrs <= 35){
      const dogAgeGroup = 'Young Puppy';
      return dogAgeGroup;
    }else if(dogYrs <= 50){
      const dogAgeGroup = 'Puppy';
      return dogAgeGroup;
    }else if(dogYrs <= 100){
      const dogAgeGroup = 'Juvenile';
      return dogAgeGroup;
    }else if(dogYrs <= 200){
      const dogAgeGroup = 'Young Adult';
      return dogAgeGroup;
    }else if(dogYrs <= 700){
      const dogAgeGroup = 'Adult';
      return dogAgeGroup;
    }else if(dogYrs <= 1100){
      const dogAgeGroup = 'Senior';
      return dogAgeGroup;
    }else{
      let dogAgeGroup = 'Geriatric';
      return dogAgeGroup;
    }
  }
  
  const handleAddingNewDogToList = async (newDog) => {
    // console.log(newDog);
    await addDog(newDog)
     
    
  };
  
  const onNewDogCreation = (event) => {
    const newDog = {
       dogName: event.target.dogName.value,
       dogWeight: parseInt(event.target.dogWeight.value),
       dogSize: calculateDogSize(parseInt(event.target.dogWeight.value)),
       dogYears: parseInt(event.target.dogYears.value),
       dogMonths: parseInt(event.target.dogMonths.value),
       dogAge: calculateDogAge(parseInt(event.target.dogYears.value), parseInt(event.target.dogMonths.value)),
       dogAgeGroup: calculateDogAgeGroup(calculateDogAge(parseInt(event.target.dogYears.value), parseInt(event.target.dogMonths.value))),
       dogSex: handleSexValueChange(event),
       dogLikes: handleLikesListChange(event),
       atThePark: false,
       startTimeAtPark: null,
       friendsArray: [],
       dogDislikes: handleDislikesListChange(event),
       dogParks: 'Alberta Park',
       ownerId: currentUser.id,
       id: v4(),
       ownerId: currentUser?.id,
     }
     return newDog;
 };
  
  //Gather input from form
  
  function handleNewDogFormSubmission(event) {
    event.preventDefault();
    const newDog = onNewDogCreation(event);
    handleAddingNewDogToList(newDog);
    navigate('/');
    
  }
  
  //Form styles
  
  const newDogFormStyle ={
    justifyContent: 'center',
    padding: '10px',
   
  }


  const homeButtonStyle = {
    margin: 'auto',
    
  }
    return (
      <Box>
        <Box style={newDogFormStyle}>
          <Box 
          sx={{
            
            marginTop: '100px auto',
            border: 'solid 2px black',
            padding: '20px',
            background: 'rgba(219, 219, 219, 0.8)',
            
            fontWeight: 'bold',
            position: 'relative',
            
          }}>
          <form onSubmit={handleNewDogFormSubmission} 
            sx={{
           
            }}>
           <Box display='grid' gap='30px' gridTemplateColumns='repeat(5 minmax(0, 1frs))' sx={{   '& > div': {gridColumn: isNonMobile ? "span 3" : "span 1" },
               padding: isNonMobile ? '100px' : '0px'}}>
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Name'
                // onBlur={handleBlur}
                name='dogName'
                sx={{gridColumn: 'span 1'}}
                required
              />
              <TextField
                fullWidth
                variant='filled'
                type='number'
                label='Weight (lbs)'
                // onBlur={handleBlur}
                name='dogWeight'
                sx={{gridColumn: 'span 1'}}
                required
              />

              <TextField
                fullWidth
                variant='filled'
                type='number'
                label='Age Months'
                // onBlur={handleBlur}
                name='dogMonths'
                sx={{gridColumn: 'span 1'}}
                required
              />
              <TextField
                fullWidth
                variant='filled'
                type='number'
                label='Age Years'
                // onBlur={handleBlur}
                name='dogYears'
                sx={{gridColumn: 'span 1'}}
                required
              />
              <Box display='grid' gridTemplateColumns={isNonMobile? 'repeat(3, 1fr)' :  '1f'}>
                <FormControl sx={{margin: '16px'}}>
                  <FormLabel id="radio-gender-group-label">Dog's Gender</FormLabel>
                  <RadioGroup
                    aria-labelledby='radio-gender-group-label'
                    defaultValue='female'
                    name='dogSex'
                  >
                    <FormControlLabel value='female' control={<Radio/>} label="Female" onChange={handleSexValueChange} />
                    <FormControlLabel value='male' control={<Radio/>} label="Male" onChange={handleSexValueChange} />
                  </RadioGroup>
                </FormControl>
                <FormGroup sx={{margin: '16px'}}>
                <FormLabel id="dog-likesList-label">Dog's Likes</FormLabel>
                  <FormControlLabel control={<Checkbox value='puppies' name='dogLikes' onChange={handleLikesListChange}/>} label='Puppies'/>
                  <FormControlLabel control={<Checkbox value='children' name='dogLikes' onChange={handleLikesListChange}/>} label='Children'/>
                </FormGroup>
                <FormGroup sx={{margin: '16px'}}>
                  <FormLabel id="dog-disLikesList-label">Dog's Dislikes</FormLabel>
                  <FormControlLabel control={<Checkbox value='puppies' name='dogDislikes' onChange={handleDislikesListChange}/>} label='Puppies'/>
                  <FormControlLabel control={<Checkbox value='children' name='dogDislikes' onChange={handleDislikesListChange}/>} label='Children'/>
                </FormGroup>
              </Box>
                <Button type='submit' variant='contained' className='btn btn-default'>Submit</Button>
              </Box>
            </form>
          </Box>
        </Box>
        <Button variant='contained' width='100px' style={homeButtonStyle}><Link to={'/'} style={{textDecoration: 'none', color: 'black'}}>Home</Link></Button>
      </Box>
    );
  
}

NewDogForm.propTypes = {
  onNewDogCreation: PropTypes.func,
  mainDogList: PropTypes.array,
}



export default NewDogForm;