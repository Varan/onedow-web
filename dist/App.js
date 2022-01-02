"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Routes_1 = require("./Routes");
// This file is just the index.tsx file from the common monorepo folder
var App = function () {
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: styles.wrapper },
            react_1.default.createElement(Routes_1.Routes, null))));
};
exports.default = App;
var styles = react_native_1.StyleSheet.create({
    root: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#F5FCFF',
        height: "100%"
    },
    wrapper: {
        flex: 1,
        backgroundColor: "F5FCFF",
        width: "100%",
        maxWidth: 425
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },
    text: {
        fontSize: 28,
        fontWeight: "600",
    },
    platformRow: {
        marginTop: 12,
        flexDirection: "row",
        alignItems: "center",
    },
    platformValue: {
        fontSize: 28,
        fontWeight: "500",
    },
    platformBackground: {
        backgroundColor: "#ececec",
        borderWidth: react_native_1.StyleSheet.hairlineWidth,
        borderColor: "#d4d4d4",
        paddingHorizontal: 6,
        borderRadius: 6,
        alignItems: "center",
    },
});
