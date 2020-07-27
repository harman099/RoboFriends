import React from "react";

//Children - So Scroll becomes parent of CardList therefore holds all the props of CardList

const Scroll = (props) => {
  return (
    <div
      style={{ overflow: "scroll", border: "5px solid black", height: "800px" }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
