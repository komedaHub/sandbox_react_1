import ReactDOM from "react-dom";
import { Fragment } from "react";

export const App = () => {
  const onClickButton = () => {
    alert("love");
  };
  const contentStyle = {
    color: "blue",
    fontSize: "20px"
  };
  return (
    <Fragment>
      {console.log("test")}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </Fragment>
  );
};
