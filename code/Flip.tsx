import * as React from "react";
import { addPropertyControls, ControlType } from "framer";
import FlipPage from "react-flip-page";

type Props = {
  height: number;
  width: number;
  children: any[];
  orientation: "vertical" | "horizontal";
  uncutPages: boolean;
  animationDuration: number;
  treshold: number;
  maxAngle: number;
  maskOpacity: number;
  perspective: number;
  pageBackground: string;
  showHint: boolean;
  showSwipeHint: boolean;
  showTouchHint: boolean;
  flipOnTouch: boolean;
  onPageChange: () => void;
  loopForever: boolean;
  disableSwipe: boolean;
  responsive: boolean;
  startAt: number;
};

export function Flip(props: Props) {
  return (
    <FlipPage
      height={props.responsive ? null : 812}
      width={props.responsive ? null : 375}
      orientation={props.orientation}
      uncutPages={props.uncutPages}
      animationDuration={props.animationDuration}
      treshold={props.treshold}
      maxAngle={props.maxAngle}
      maskOpacity={props.maskOpacity}
      perspective={`${props.perspective}em`}
      pageBackground={props.pageBackground}
      showHint={props.showHint}
      showSwipeHint={props.showSwipeHint}
      showTouchHint={props.showTouchHint}
      flipOnTouch={props.flipOnTouch}
      onPageChange={props.onPageChange}
      loopForever={props.loopForever}
      disableSwipe={props.disableSwipe}
      responsive={props.responsive}
      startAt={props.startAt}
    >
      {props.children}
    </FlipPage>
  );
}

Flip.defaultProps = {
  height: 812,
  width: 375,
  orientation: "horizontal",
  uncutPages: false,
  animationDuration: 200,
  treshold: 10,
  maxAngle: 45,
  maxOpacity: 0.4,
  perspective: 130,
  pageBackground: "#fff",
  showHint: false,
  showSwipeHint: false,
  showTouchHint: false,
  flipOnTouch: false,
  loopForever: true,
  disableSwipe: false,
  responsive: false,
  startAt: 0
};

addPropertyControls(Flip, {
  children: {
    type: ControlType.Array,
    title: "Pages",
    propertyControl: { type: ControlType.ComponentInstance }
  },
  orientation: {
    type: ControlType.Enum,
    title: "Orientation",
    options: ["vertical", "horizontal"],
    optionTitles: ["Vertical", "Horizontal"]
  },
  uncutPages: {
    type: ControlType.Boolean,
    title: "Uncut Pages",
    enabledTitle: "True",
    disabledTitle: "False"
  },
  animationDuration: {
    type: ControlType.Number,
    title: "Animation Duration",
    min: 100,
    max: 1000,
    step: 1
  },
  treshold: {
    type: ControlType.Number,
    title: "Treshold",
    min: 5,
    max: 90,
    step: 1
  },
  maxAngle: {
    type: ControlType.Number,
    title: "Max Angle",
    min: 1,
    max: 90,
    step: 1
  },
  maxOpacity: {
    type: ControlType.Number,
    title: "Mask Opacity",
    min: 0.1,
    max: 1,
    step: 0.1
  },
  perspective: {
    type: ControlType.Number,
    title: "Perspective",
    min: 50,
    max: 500,
    step: 1
  },
  pageBackground: {
    type: ControlType.Color,
    title: "Background Color"
  },
  showHint: {
    type: ControlType.Boolean,
    title: "Direction Hint",
    enabledTitle: "True",
    disabledTitle: "False"
  },
  showSwipeHint: {
    type: ControlType.Boolean,
    title: "Swipe Hint",
    enabledTitle: "True",
    disabledTitle: "False"
  },
  showTouchHint: {
    type: ControlType.Boolean,
    title: "Touch Hint",
    enabledTitle: "True",
    disabledTitle: "False"
  },
  flipOnTouch: {
    type: ControlType.Boolean,
    title: "Flip on Touch",
    enabledTitle: "True",
    disabledTitle: "False"
  },
  loopForever: {
    type: ControlType.Boolean,
    title: "Loop",
    enabledTitle: "True",
    disabledTitle: "False"
  },
  disableSwipe: {
    type: ControlType.Boolean,
    title: "Disable Swipe",
    enabledTitle: "True",
    disabledTitle: "False"
  },
  responsive: {
    type: ControlType.Boolean,
    title: "Responsive",
    enabledTitle: "True",
    disabledTitle: "False"
  },
  startAt: {
    type: ControlType.Number,
    title: "Start Page",
    displayStepper: true
  }
});
