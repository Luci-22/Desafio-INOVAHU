import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Roller } from "react-awesome-spinners";

export default function Lod (){
  const [loading, setLoading] = useState(true)
    
  return (
      loading && <Roller />
  );
}
