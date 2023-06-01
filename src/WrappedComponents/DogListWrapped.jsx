import { withDogList } from "../HOC/withDogList";
import AtThePark from "../components/AtThePark";
import DogList from "../scenes/DogList";
import MyDogs from '../scenes/MyDogs'

export const DogListWrappedPark = withDogList(AtThePark);

export const DogListWrappedDogs = withDogList(DogList);

export const DogListWrappedMyDogs = withDogList(MyDogs);