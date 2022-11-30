import React, { useState, useEffect, useRef } from "react";
import uuid from "react-uuid";

import "./topic.css";
const specialChars = /[`()_\-[\]{};':"\\|,./?]/;
const Topic = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");
  const [isTrue, setIsTrue] = useState(false);
  const [index, setIndex] = useState(0);
  const textArea = useRef();
  const getRandomColor = () => {
    const colors = ["red", "orange", "green", "blue"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const newItem = {
    id: uuid(),
    topics: text,
  };

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      if (specialChars.test(e.key)) {
        setIsTrue(true);
        const color = getRandomColor();
        setColor(color);
        const { selectionStart, selectionEnd } = e.target;
        setIndex(text.charAt(e.key));
        console.log(text.charAt(e.key));
      }
    });
  }, []);

  return (
    <div>
      <div>ADD TOPIC</div>
      <div>
        <label htmlFor="topicname">TOPIC:</label>
        <input id="topicname" type="text" />
        <div>
          <textarea
            ref={textArea}
            rows={10}
            cols={30}
            placeholder="Enter Text?.."
            onChange={(e) => setText(e.target.value)}
            style={{ color: color, display: "inline" }}
            value={text}
          />
        </div>
      </div>
    </div>
  );
};

export default Topic;
