import React from "react";
import { useParams } from "react-router-dom";
import tutorInformation from "../../data/tutorInformation";

const IndividualTutorPage = () => {
  const { tutorID } = useParams();
  
  return (
    <>
      <div>
        <h1>
          {tutorInformation[tutorID].name} Tutor
        </h1>
        <p>
          {tutorInformation[tutorID].website}
        </p>
      </div>
    </>
  );
};

export default IndividualTutorPage;