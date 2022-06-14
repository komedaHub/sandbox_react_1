import ReactDOM from "react-dom";
import { Fragment, useCallback } from "react";
import { useState, memo } from "react";
import { useEffect } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModules";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export const App = memo(() => {
  console.log("Appレンダリング");
  // Stateの定義
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    setNum(num + 1);
  };

  const onClickReset = useCallback(() => {
    setNum(0);
  }, []);

  useEffect(() => {
    // alert();
  }, [num]);
  return (
    <Fragment>
      {console.log("test")}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です!</ColoredMessage>
      <CssModules />
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <hr />
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </Fragment>
  );
});
