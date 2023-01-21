import { API } from 'aws-amplify';
import { listDogSchemas } from '../graphql/queries';
import { createDogSchema as addNewDog, deleteDogSchema as deleteDogFromList, updateDogSchema as updateDogInList  } from '../graphql/mutations';


export async function fetchDogs() {
  const apiData =  await API.graphql({ query: listDogSchemas });
  const apiDogs = apiData.data.listDogSchemas.items.filter(items => items._deleted !== true);
  console.log(apiDogs)
  return apiDogs
  
}

export const addDog = async (newDog) => {
   
  await API.graphql({ query : addNewDog, variables : { input: newDog}, });
  fetchDogs();

}

export const deleteDog = async (dogToDelete) => {
  let id = dogToDelete.id;
  await API.graphql({
    query: deleteDogFromList,
    variables: { input: { id: id}},
  }).then(function(response) {
    if(!response.ok) {
      // const newMainDogList = mainDogList.filter((dog) => dog.id !== id);
      // setMainDogList(newMainDogList);
      // setSelectedDog(null); 
      console.log(response.errors);
    }
  })
}


export const updateDog = async(editedDog) => {
  // const editedDogList = mainDogList
  //   .filter(dog => dog.id !== editedDog.id)
  //   .concat(editedDog);
  // setMainDogList(editedDogList);
  await API.graphql({ 
    query : updateDogInList, variables : { input: editedDog}}
    ).then(function(response) {
      if(!response.ok) {
        // const newMainDogList = mainDogList.filter((dog) => dog.id !== id);
        // setMainDogList(newMainDogList);
        // setSelectedDog(null); 
        console.log(response.errors);
      };
  })
}