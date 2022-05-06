import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getOneLaunch from "../Utilities/getOneLaunch";

function Launch() {
  const [launch, setLaunch] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    getOneLaunch(id).then((result) => {
      setLaunch(result);
      console.log(result);
    });
  });

  return <div>Launch ID is : {id}</div>;
}

export default Launch;
