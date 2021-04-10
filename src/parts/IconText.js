import React from "react";
import Button from "elements/Button";

const IconText = (props) => {
  return (
    <Button
      className={`brand-text-icon ${props ? "mx-auto" : ""}`}
      href=""
      type="link"
    >
      Stay<span className="text-gray-900">cation.</span>
    </Button>
  );
};

export default IconText;
