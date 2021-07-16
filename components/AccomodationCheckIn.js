import InformationContainer from "./InformationContainer";

export default function AccomodationCheckIn ({ startDate, checkInTime, name, address }) {
  return (
    <>
      <InformationContainer
        icon="🏨" upperDes={`${startDate} ${checkInTime}`}
        lowDes={`${name}, ${address}`}
      />
    </>
  )
}