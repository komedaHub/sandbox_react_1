import ReactDOM from "react-dom";
import { Fragment, useCallback } from "react";
import { useState, memo } from "react";
import { useEffect } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModules";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";
import { useContext } from "react";
import { AdminFlagContext } from "./components/providers/AdminFlagProviders";
import { Card } from "./components/Card";

export const App = memo(() => {
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);

  const onClickSwitch = () => setIsAdmin(!isAdmin);

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
      <div>
        {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
        <button onClick={onClickSwitch}>権限切り替え</button>
        <Card isAdmin={isAdmin} />
      </div>
      <hr />
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </Fragment>
  );
});
