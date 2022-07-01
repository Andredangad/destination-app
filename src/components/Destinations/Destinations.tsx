import { useContext } from "react";
import { Context as DestinationContext } from './Context';

export default function Destinations() {
  const { destinations, setDestinations } = useContext(DestinationContext);
  console.log(destinations);
  return <></>;
}
