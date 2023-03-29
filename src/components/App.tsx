import React, { useState, useEffect, useRef } from "react";
import Peep from "dailyworkspace";
import { useProvider } from "../utils/contextProvider";
import LeftMenu from "./leftMenu";
import RightMenu from "./rightMenu";
import { adjustPeepsViewbox } from "../utils/viewbox";
const styles = {
  peepStyle: {
    width: 390,
    height: 390,
    justifyContent: "center",
    alignSelf: "center",
    transform: "unset",
  },
};

export const PeepsGenerator: React.FC = () => {
  const { state, dispatch } = useProvider();
  const illustrationRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const {
    pickedAccessory,
    pickedBody,
    pickedFace,
    pickedFacialHair,
    pickedHair,
    strokeColor,
    pressedKey,
    scaleVector,
    svgTransform,
    isFrameTransparent,
    backgroundBasicColor,
  } = state;



  useEffect(() => {
    const peepGroupWrapper = document.querySelector(
      ".svgWrapper > svg > g"
    ) as SVGGraphicsElement;
    const { width, height, x, y } = peepGroupWrapper.getBBox();
    peepGroupWrapper.setAttribute(
      "transform",
      `rotate(${svgTransform?.rotate || "0"} ${x + width / 2} ${y + height / 2
      })`
    );
  }, [svgTransform, pickedBody]);

  const handleMouseEnter = () => {
    (document.getElementsByClassName("svgWrapper")[0] as HTMLElement).focus();
  };

  const handleMouseLeave = () => {
    (document.getElementsByClassName("header")[0] as HTMLElement).focus();
    dispatch({
      type: "SET_WHEEL_DIRECTION",
      payload: undefined,
    });
    dispatch({
      type: "SET_PRESSED_KEY",
      payload: undefined,
    });
  };

  const handleKeyDown = ({ nativeEvent }: React.KeyboardEvent) => {
    if (pressedKey === nativeEvent.key) {
      return;
    }
    dispatch({
      type: "SET_PRESSED_KEY",
      payload: nativeEvent.key,
    });
  };

  const handleKeyUp = () => {
    dispatch({
      type: "SET_PRESSED_KEY",
      payload: undefined,
    });
  };

  const handleMouseWheel = ({ nativeEvent }: React.WheelEvent) => {
    dispatch({
      type: "SET_IS_WHEEL_ACTIVE",
      payload: true,
    });
    if (nativeEvent.deltaY > 0) {
      dispatch({
        type: "SET_WHEEL_DIRECTION",
        payload: "down",
      });
    } else {
      dispatch({
        type: "SET_WHEEL_DIRECTION",
        payload: "up",
      });
    }
    setTimeout(() => {
      dispatch({
        type: "SET_IS_WHEEL_ACTIVE",
        payload: false,
      });
    }, 0);
  };
  useEffect(() => {
    /*
      Removing the event listeners in
      small screens to prevent jumping behavior
      when pressing on the illustration
     */
    if (window?.innerWidth < 1201) {
      illustrationRef.current?.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );
      illustrationRef.current?.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    }
  }, []);
  return (
    <>

      <div className="container mx-auto" >
          <div
            ref={illustrationRef}
            className="svgWrapper"
            tabIndex={0}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            onWheel={handleMouseWheel}
          >
            <Peep
              style={{
                ...styles.peepStyle,
                width: styles.peepStyle.width * scaleVector,
                height: styles.peepStyle.height * scaleVector,
                transform: `${svgTransform?.flip || ""}`,
                marginTop: '100vh'
              }}
              accessory={pickedAccessory}
              body={pickedBody}
              face={pickedFace}
              hair={pickedHair}
              facialHair={pickedFacialHair}
              strokeColor={strokeColor}
              viewBox={adjustPeepsViewbox(pickedBody)}
              wrapperBackground={
                isFrameTransparent ? undefined : backgroundBasicColor
              }
            />
          {/* <form className="inputBox" style={{marginTop: "20px", justifyContent:"flex-start"}}>
              <input
                type="text" 
                placeholder="Name"
                value={name}
                style={{border: "1px solid gray", borderRadius: "1em", height:"3em", paddingLeft:"10px", marginRight:"10px"}}
                onChange={(e) => setName(e.target.value)}
              />
          </form>
          <form className="inputBox" style={{marginTop: "10px", justifyContent:"flex-start"}} >
            <input
              type="text" 
              placeholder="Description"
              value={description}
              style={{border: "1px solid gray", borderRadius: "1em", height:"3em", paddingLeft:"10px", marginRight:"10px"}}
              onChange={(e) => setDescription(e.target.value)}
            />
          </form>
            <button className="saveButton" style={{marginLeft:"80%"}}> Submit </button> */}
            {/* <button className="saveButton" style={{marginLeft:"40%", marginTop:"20px"}}> Mint NFT </button> */}
          </div>

          <div style={{marginTop: '30vh'}}>
          <LeftMenu />
          <RightMenu />
          </div>
        </div>
    </>
  );
};
