import React, { useState } from "react";

const JotaiDisplay = () => {
  const [name, setName] = useState("");

  return <h1>{name}</h1>;
};

export default JotaiDisplay;
