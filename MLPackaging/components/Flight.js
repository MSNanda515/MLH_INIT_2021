import InformationContainer from "./InformationContainer";

export default function Flight ({ departureTime, arrivalTime, destination, origin, date }) {
  return (
    <>
      <div className="iterinary">
        <InformationContainer
          icon="✈️" upperDes={`${date} ${departureTime} ${origin}`}
          lowDes={`${date} ${arrivalTime} ${destination}`}
        />
      </div>
      <style jsx>{`
        .iterinary {
          display: flex;
          flex-direction: column;
          grid-gap: 10px;
          padding: 4px;
          width: 100%;
        }
      `}</style>
    </>
  )
}