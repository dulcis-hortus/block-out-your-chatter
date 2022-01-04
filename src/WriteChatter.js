import React, { useState } from "react";

const WriteChatter = ({ onChange }) => {
  const [text, setText] = useState();
  const handleClickBtn = () => {
    setText("");
    onChange(true);
  };

  const handleTextArea = (e) => {
    if (e.target.value) {
      onChange(false);
    }
    setText(e.target.value);
  };

  return (
    <>
      <textarea
        value={text}
        onChange={(e) => handleTextArea(e)}
        className="chatterBox"
      />
      <button onClick={handleClickBtn}>지우기</button>
    </>
  );
};

export default WriteChatter;
