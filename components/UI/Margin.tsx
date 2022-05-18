import React from "react";
interface marginInterface {
  marginTop?: number;
  marginBottom?: number;
}
const Margin: React.FC<marginInterface> = ({
  marginBottom = 0,
  marginTop = 0,
}) => {
  return (
    <div
      style={{ marginBottom: `${marginBottom}px`, marginTop: `${marginTop}px` }}
    ></div>
  );
};

export default Margin;
