const style = {
  height: "50px",
  backgroundColor: "lightgray"
};

export const Child3 = () => {
  console.log("Child3　レンダリング");

  return (
    <div style={style}>
      <p>Child3</p>
    </div>
  );
};