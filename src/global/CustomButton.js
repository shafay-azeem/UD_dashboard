import React from "react";
import Button from "react-bootstrap/Button";

const CustomButton = (props) => {
  return (
    <>
      <Button
        style={{ borderRadius: "20px", width: "120px" }}
        variant="outline-primary"
        size={props.size}
      >
        {props.btnName}
      </Button>
    </>
  );
};

export default CustomButton;
