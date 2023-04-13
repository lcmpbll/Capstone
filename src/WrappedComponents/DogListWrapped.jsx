import { withDogList } from "../HOC/withDogList";
import AtThePark from "../components/AtThePark";
import DogList from "../scenes/DogList";

export const DogListWrappedPark = withDogList(<AtThePark />)

export const DogListWrappedDogs = withDogList(<DogList/>)