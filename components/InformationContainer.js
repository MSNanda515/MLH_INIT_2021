export default function InformationContainer ({icon, upperDes, lowDes}) {
  return (
    <>
     <div className="information-container">
       <span className="icon">{icon}</span>
       <span className="upper" >{upperDes}</span>
       <span className="lower">{lowDes}</span>
     </div>
     <style jsx>
       {`
        .information-container {
           display: grid;
           grid-template-areas: "icon upper" 
                                  "icon lower";
          grid-gap: 7px;
          background: #ebf3fa;
          padding: 5px;
        }
        .icon {
          grid-area: icon;
          display: flex;
          align-items: center;
        }
        .upper {
          grid-area: upper;
        }
        .lower {
          grid-area: lower;
        }
        `} 
     </style>
    </>
  );
}