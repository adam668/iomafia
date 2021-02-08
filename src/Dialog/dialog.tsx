/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";


export default function Dialog(props: any) {
    if (!props.isOpen) {
      return null;
    }

    const BackgroundStyle = {
      backgroundColor: "rgba(220,220,220,0.5)",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };

  

    const HeaderStyle = {
      height: 20,
      width: "100%"
    };

    const CloseBtnStyle = {
      cursor: "pointer",
      display: "block"
    };

    return (
      <div style={BackgroundStyle}>

        <div style={{
        width: 600,
      height: 400,
      backgroundColor: "#222422",
      margin: "auto",
      padding: 5,
      alignItems: "center",
      position: "absolute",
    left: "-150px",
    top: "-50px",
    border: "none",
    borderRadius: "10px"}}>
        
          <div style={HeaderStyle}>
            <span style={CloseBtnStyle} onClick={props.onClose}>
              X
            </span>
          </div>
          {props.children}
        </div>
      </div>
    );
  }



