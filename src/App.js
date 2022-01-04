import React, { useState } from "react";
import "./styles.css";
import WriteChatter from "./WriteChatter";
import SnowFlakes from "./SnowFlakes";

const App = () => {
  const [snowFall, setSnowFall] = useState(false);
  return (
    <>
      {snowFall && <SnowFlakes />}
      <WriteChatter onChange={setSnowFall} snowFall={snowFall} />
    </>
  );
};

export default App;
