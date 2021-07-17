
import InformationContainer from "./InformationContainer";

export default function Restaurant ({ time, date, name, address}) {
  return (
    <>
      <InformationContainer
        icon="🍴" upperDes={`${date} ${time}`}
        lowDes={`${name}, ${address}`}
      />
    </>
  )
}