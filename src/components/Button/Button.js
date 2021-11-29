import { Button } from "@material-ui/core";
import React from "react";
import "./Button.css";
const CostumeButton = ({ text, icon }) => {
  return (
    <Button
      className="costume_btn"
      endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null}
    >
      <span className="btn_text">{text}</span>
    </Button>
  );
};

export default CostumeButton;
