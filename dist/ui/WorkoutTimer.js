"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutTimer = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var WorkoutTimer = function (_a) {
    var onXPress = _a.onXPress, currentTime = _a.currentTime, percent = _a.percent;
    console.log(percent);
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: [styles.line, { width: percent }] }),
        react_1.default.createElement(react_native_1.View, { style: styles.row },
            react_1.default.createElement(react_native_1.Text, { style: styles.timeText }, currentTime),
            react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: onXPress },
                react_1.default.createElement(react_native_1.Text, { style: styles.x }, "x")))));
};
exports.WorkoutTimer = WorkoutTimer;
var styles = react_native_1.StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 50,
        width: '100%',
        backgroundColor: '#486550'
    },
    row: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 30
    },
    x: {
        color: '#B2A1A1',
        fontSize: 20
    },
    timeText: {
        color: '#fff',
        fontSize: 18
    },
    line: {
        height: 3,
        backgroundColor: '#B2A1A1'
    }
});
