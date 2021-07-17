import Flight from "./Flight";
import AccomodationCheckIn from "./AccomodationCheckIn";
import AccomodationCheckOut from "./AccomodationCheckOut";
import Restaurant from "./Restaurant";
export default function Iterinary({iterinary}) {
  return (
    <>
      <h1>Flights</h1>
      {iterinary.flights.map((flight, key) => (
        <Flight departureTime={flight.departureTime}
          arrivalTime={flight.arrivalTime}
          destination={flight.destination}
          origin={flight.origin}
          date={flight.date}
          key={key}
          />
      ))}
      <h1>Accomodations</h1>
      {iterinary.accomodation.map((accom, key) => (
        <AccomodationCheckIn startDate={accom.startDate}
          checkInTime={accom.checkInTime}
          name={accom.name}
          address={accom.address}
          key={key}
          />
      ))}
      {iterinary.accomodation.map((accom, key) => (
        <AccomodationCheckOut endDate={accom.endDate}
          checkOutTime={accom.checkOutTime}
          name={accom.name}
          address={accom.address}
          key={key}
          />
      ))}
      <h1>Activities</h1>
      {iterinary.activities.map((act, key) => (
        <Restaurant
          time={act.time}
          date={act.date}
          name={act.name}
          address={act.address}
        /> 
      ))}
      
    </>
  );
}
