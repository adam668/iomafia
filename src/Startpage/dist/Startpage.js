"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/* eslint-disable react/no-direct-mutation-state */
var Button_1 = require("../Button/Button");
require("./Startpage.css");
var dialog_1 = require("../Dialog/dialog");
var react_1 = require("react");
var Startpage = /** @class */ (function (_super) {
    __extends(Startpage, _super);
    function Startpage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isModalOpen: false,
            max: 100,
            min: 0,
            value: 0
        };
        _this.toggleModal = function () {
            var isModalOpen = _this.state.isModalOpen;
            _this.setState({ isModalOpen: !isModalOpen });
        };
        return _this;
    }
    Startpage.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("section", null,
                react_1["default"].createElement("div", { id: "title" },
                    react_1["default"].createElement("div", { id: "login-buttons" },
                        react_1["default"].createElement("button", { id: "login" }, "Login"),
                        react_1["default"].createElement("button", { id: "register" }, "Register"))),
                react_1["default"].createElement("div", { id: "main" },
                    react_1["default"].createElement("h1", null,
                        react_1["default"].createElement("code", null, "MAFIA.IO")),
                    react_1["default"].createElement("div", { id: "buttons" },
                        react_1["default"].createElement(Button_1["default"], { title: "Start", action: function () { return undefined; } }),
                        react_1["default"].createElement(Button_1["default"], { title: "Profile", action: function () { return undefined; } }),
                        react_1["default"].createElement(Button_1["default"], { title: "Friends", action: function () { return undefined; } }),
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement(Button_1["default"], { title: "Options", action: function () { return _this.toggleModal(); } }),
                            react_1["default"].createElement(dialog_1["default"], { isOpen: this.state.isModalOpen, onClose: this.toggleModal },
                                react_1["default"].createElement("div", null, "Settings"),
                                react_1["default"].createElement("div", { id: 'SettingsText' },
                                    "Music: ",
                                    react_1["default"].createElement("br", null),
                                    react_1["default"].createElement("input", { type: "range", min: this.state.min, max: this.state.max, value: this.state.value, onChange: function () { return console.log('hi'); }, className: "slider", id: "myRange" })))))),
                react_1["default"].createElement("div", { id: "contacts", style: { position: "absolute", right: "15px", bottom: "15px" } },
                    react_1["default"].createElement("a", { style: { color: "white" }, href: "https://discord.gg/8ckkwTYhp6", target: "_blank", rel: "noreferrer", id: 'discord' },
                        react_1["default"].createElement("i", { style: { marginLeft: "15px" }, className: "fab fa-discord fa-3x" }))))));
    };
    return Startpage;
}(react_1.Component));
exports["default"] = Startpage;
