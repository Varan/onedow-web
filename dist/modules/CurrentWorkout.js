"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentWorkout = void 0;
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var RootStore_1 = require("../stores/RootStore");
var WorkoutCard_1 = require("../ui/WorkoutCard");
var WorkoutTimer_1 = require("../ui/WorkoutTimer");
exports.CurrentWorkout = (0, mobx_react_lite_1.observer)(function () {
    var rootStore = (0, react_1.useContext)(RootStore_1.RootStoreContext);
    (0, react_1.useEffect)(function () {
        return function () {
            rootStore.workoutTimerStore.stopTimer();
        };
    }, []);
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        rootStore.workoutStore.currentExercises.map(function (e) {
            return (react_1.default.createElement(WorkoutCard_1.WorkoutCard, { onSetPress: function (setIndex) {
                    rootStore.workoutTimerStore.startTimer();
                    var v = e.sets[setIndex];
                    var newValue;
                    if (v === '') {
                        newValue = "".concat(e.reps);
                    }
                    else if (v === '0') {
                        rootStore.workoutTimerStore.stopTimer();
                        newValue = '';
                    }
                    else {
                        newValue = "".concat(parseInt(v) - 1);
                    }
                    e.sets[setIndex] = newValue;
                }, key: e.exercise, sets: e.sets, exercise: e.exercise, repsAndWeight: "".concat(e.numSets, "x").concat(e.reps, " ").concat(e.weight) }));
        }),
        rootStore.workoutTimerStore.isRunning ? (react_1.default.createElement(WorkoutTimer_1.WorkoutTimer, { percent: rootStore.workoutTimerStore.percent, currentTime: rootStore.workoutTimerStore.display, onXPress: function () { return rootStore.workoutTimerStore.stopTimer(); } })) : null));
});
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        padding: 10
    }
});
