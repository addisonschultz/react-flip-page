import * as React from "react";
import { addPropertyControls, ControlType } from "framer";
import FlipPage from "react-flip-page";

export function Flip(props) {
  return (
    <FlipPage height={812} width={375} orientation={"horizontal"}>
      {props.children}
    </FlipPage>
  );
}

addPropertyControls(Flip, {
  children: {
    type: ControlType.Array,
    propertyControl: { type: ControlType.ComponentInstance }
  }
});
