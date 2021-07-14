import InformationContainer from "./InformationContainer";

export default function ({ departureTime, arrivalTime, destination, origin, date }) {
  return (
    <>
      <InformationContainer
        icon="✈️" upperDes={`${date} ${departureTime} ${origin}`}
        lowDes={`${date} ${arrivalTime} ${destination}`}
      />
    </>
  )
}