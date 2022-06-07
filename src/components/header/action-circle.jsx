function ActionCircle(props) {
  const size = 15;
  return (
    <div
      style={{
        display: "inline-block",
        height: size,
        maxHeight: size,
        width: size,
        maxWidth: size,
        borderRadius: size / 2,
        backgroundColor: props.color,
      }}
      className="m-1 m-sm-2"
    ></div>
  );
}

export default ActionCircle;
