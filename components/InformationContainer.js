export default function InformationContainer ({icon, upperDes, lowDes}) {
  return (
    <>
     <div>
       <p>{icon}</p>
       <p>{upperDes}</p>
       <p>{lowDes}</p>
     </div>
    </>
  );
}