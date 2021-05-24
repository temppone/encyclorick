import React from "react";

const Head = (props) => {
  React.useEffect(() => {
    document.title = `Rickpedia | ${props.title}`;
    document
      .querySelector('meta[name="description]"')
  });
  return <div></div>;
};

export default Head;
