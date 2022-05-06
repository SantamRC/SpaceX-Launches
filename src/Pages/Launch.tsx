import React from "react";
import { useParams } from "react-router-dom";

function Launch() {
  let { id } = useParams();
  return <div>Launch ID is : {id}</div>;
}

export default Launch;
