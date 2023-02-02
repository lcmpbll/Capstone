import { updateDog } from './apihelper';


export const getTime = () => {
  let now = new Date().toLocaleString();
  console.log(now);
  return now;
}

export const switchParkStatus = async (dog) => {
  if(dog.atThePark === true){
    const dogLeavesPark = {
      ...dog,
      atThePark: false,
      startTimeAtPark: null
    }
    await updateDog(dogLeavesPark);
  } else {
    const dogEntersPark = {
      ...dog,
      atThePark: true,
      startTimeAtPark: getTime()
    }
    await updateDog(dogEntersPark);
  }  
}