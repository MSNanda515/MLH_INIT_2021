import InformationContainer from "./InformationContainer";

export default function ({departureTime, arrivalTime, destination, origin, date}) {
  return (
    <>
      <InformationContainer 
        icon="flight" upperDes={`${date} ${departureTime} ${origin}`}
        lowDes={`${date} ${arrivalTime} ${destination}`}
        />
    </>
  )
}