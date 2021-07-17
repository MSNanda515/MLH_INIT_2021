import InformationContainer from "./InformationContainer";

export default function AccomodationCheckOut ({ endDate, checkOutTime, name, address }) {
  return (
    <>
      <InformationContainer
        icon="🏨" upperDes={`${endDate} ${checkOutTime}`}
        lowDes={`${name}, ${address}`}
      />
    </>
  )
}