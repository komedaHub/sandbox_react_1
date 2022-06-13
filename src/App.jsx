import ReactDOM from "react-dom";
import { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  // Stateの定義
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    alert();
  }, [num]);
  return (
    <Fragment>
      {console.log("test")}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です!</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </Fragment>
  );
};
