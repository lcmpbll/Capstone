import React, { useState, useEffect } from 'react';
import Dog from '../components/Dog.jsx';
import {useMediaQuery} from '@mui/material';
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai';
import {RiFilterOffLine, RiFilterLine} from 'react-icons/ri';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//shade sort buttons if sort type is selected. 
const DogList = (props, {match}) => {
  
  const {dogList} = props;
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const [sortBy, setSortBy] = useState(null);
  const [smallest, setSmallest] = useState(true);
  const [filterBy, setFilterBy] = useState(null);
  const [include, setInclude] = useState(true);
  const [filterApplied, setFilterApplied] = useState(false);
  const [dogView, setDogView] = useState([]);
  
  useEffect(() => {
    setDogView(dogList)
  }, [dogList]);
  

  const handleSortClick = (option, smallest) => {
    if(sortBy === option){
      setSmallest(!smallest);
    }
    setSortBy(option);
  
    sortDogList(sortBy, smallest)
  }
  
  const handleMainFilterClick = () => {
    setFilterApplied(!filterApplied);
    setSortBy(null);
    setSmallest(true);
    setFilterBy(null);
    setInclude(true);
    setDogView(dogList);
  }
  const sortDogList = (sortBy, smallest) => {
    if(smallest === true){
      const newDogView = dogView.sort((a, b) => {
        return a[sortBy] - b[sortBy]
      })
      setDogView(newDogView);
     
    } else {
      return dogView.sort((a, b) => {
        return b[sortBy] - a[sortBy] 
      });

    }
    
  }
  
  
  const handleFilterSelectClick = (property, filter, include) => {
    if(filter !== filterBy){
     setFilterBy(filter);
    }
    
    filterDogList(property, filter, include);
  }
  
  const filterDogList = (property, filterBy, include) => {
    const arrayProperties = ['dogLikes', 'dogDislikes'];
    if(arrayProperties.includes(property) === false){
      
      if(include === true){
        const newDogView = dogList.filter((dog) => dog[property] === filterBy)
        setDogView(newDogView);
        setInclude(!include);
      } else {
        
        const newDogView = dogList.filter((dog) => dog[property] !== filterBy) 
        setDogView(newDogView);
        setInclude(!include);
      }
    } else {

      const newDogView = dogList.filter((dog) => dog[property].includes(filterBy) === include);
      console.log(newDogView);
      setDogView(newDogView);
      setInclude(!include);
 
    }
    
    
    
  }
  
  //styles
  const dogsStyle = {
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center',
    margin: '0 auto'
  
    
  }
  const dogCardStyle = {
    border: 'solid 2px #4986e8',
    margin: '13px auto',
    width:  isNonMobile ? '400px' : '200px',
    background: 'rgba(219, 219, 219)',
    padding: '1rem',

  }
  
  const dogListStyle = {
    display: 'flex',
    justifyContent:'center',
    flexDirection: 'column',
    margin: '0 auto',
 
  }

  
  const sortButtonStyle = {
    margin: '5px',
    width: 'content',
    // background: 'rgba(219, 219, 219)',
    border: 'solid 2px #4986e8',
    borderRadius: '8px',
    shadow: '0',
    cursor: 'pointer',
    alignItems: 'center',
    
  }
  
  const linkStyle = {
    textDecoration: 'none',
    color: 'black'
  }

  return dogList ? (
    <div style={dogsStyle}>
      <div style={{display: 'flex', alignItems: 'center', marginBottom: '0'}}>
        <h1 style={{ display: 'flex', justifyContent: isNonMobile ? 'center' : 'flex-start', padding: '1rem', marginBottom: '0px'}}>All Dogs</h1>
        <div  onClick={() => handleMainFilterClick()} style={{ border: 'solid 2px  #4986e8', background: filterApplied ? '#4986e8': 'none', width: '2rem', justifyContent: 'center', alignItems: 'center', height: '2rem', padding: '6px', borderRadius: '50%', marginTop: '10px'}} aria-label={filterApplied ? 'Remove all filters and close filter selection.': 'View filter and sort selection.'}>
          {filterApplied ? <RiFilterOffLine/> : <RiFilterLine/> }
        </div>
      </div>
      <div style={dogListStyle}>
        {filterApplied ? 
        <div>
          <h4 style={{margin: '0px'}}>Sort Dogs:</h4>
          <div>
            <button  onClick={() => handleSortClick(`dogAge`, smallest)} style={{  margin: '5px', width: 'content', background: sortBy === 'dogAge' ? '#4986e8' : '', border: 'solid 2px #4986e8', borderRadius: '8px', shadow: '0', cursor: 'pointer',
              alignItems: 'center'
            }}>{smallest ? <AiOutlineArrowUp/> : <AiOutlineArrowDown/> } Age</button>
            <button  onClick={() => handleSortClick(`dogWeight`, smallest)} style={{  margin: '5px', width: 'content', background: sortBy === 'dogWeight' ? '#4986e8' : '', border: 'solid 2px #4986e8', borderRadius: '8px', shadow: '0', cursor: 'pointer',
              alignItems: 'center'
            }}>{smallest ? <AiOutlineArrowUp/> : <AiOutlineArrowDown/> } Size</button>
          </div>
          <div>
            <h4>Filter Dogs:</h4>
            <div>
              <button  onClick={() => handleFilterSelectClick(`dogLikes`, `puppies`, include)} style={{  margin: '5px', width: 'content', background: filterBy === 'puppies' ? '#4986e8' : '', border: 'solid 2px #4986e8', borderRadius: '8px', shadow: '0', cursor: 'pointer',
              alignItems: 'center'
            }}>Likes Pupppies</button>
              <button  onClick={() => handleFilterSelectClick(`dogSex`, `Female`, include)} style={{  margin: '5px', width: 'content', background: filterBy === 'Female' ? '#4986e8' : '', border: 'solid 2px #4986e8', borderRadius: '8px', shadow: '0', cursor: 'pointer',
              alignItems: 'center'
            }}>{include ? "Female" : "Male"}</button>
            </div>
          </div>
        </div>
        : null }
        {dogView?.map((dog) => 
        <div style={dogCardStyle} key={dog.id}>
          <Link to={`/dog/${dog.id}`} style={linkStyle}>
            <Dog 
              isNonMobile={isNonMobile}
              dogName={dog.dogName}
              dogSex={dog.dogSex}
              dogSize={dog.dogSize}
              dogAgeGroup={dog.dogAgeGroup}
              id={dog.id}
              key={dog.id}
            />
          </Link>
        </div>
        )}
      </div>
     
    </div>

  ): null;

  
}



DogList.propTypes = {
  dogList: PropTypes.array,
  Dog: PropTypes.object,
  handleSortClick: PropTypes.func,
  sortDogList: PropTypes.func,
  handleMainFilterClick: PropTypes.func,
  filterDogList: PropTypes.func,
  handleFilterSelectClick: PropTypes.func,
  
};

export default DogList;


