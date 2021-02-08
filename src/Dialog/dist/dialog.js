"use strict";
exports.__esModule = true;
/* eslint-disable react/jsx-no-comment-textnodes */
var react_1 = require("react");
function Dialog(props) {
    if (!props.isOpen) {
        return null;
    }
    var BackgroundStyle = {
        backgroundColor: "rgba(220,220,220,0.5)",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
    var HeaderStyle = {
        height: 20,
        width: "100%"
    };
    var CloseBtnStyle = {
        cursor: "pointer",
        display: "block"
    };
    return (react_1["default"].createElement("div", { style: BackgroundStyle },
        react_1["default"].createElement("div", { style: {
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
                borderRadius: "10px"
            } },
            react_1["default"].createElement("div", { style: HeaderStyle },
                react_1["default"].createElement("span", { style: CloseBtnStyle, onClick: props.onClose }, "X")),
            props.children)));
}
exports["default"] = Dialog;
