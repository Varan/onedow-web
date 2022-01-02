"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var react_1 = __importDefault(require("react"));
var CurrentWorkout_1 = require("./modules/CurrentWorkout");
var WorkoutHistory_1 = require("./modules/WorkoutHistory");
// we don't have to specify the file here because it'll just automatically use the correct index file from the folder when it runs
var index_1 = require("./Router/index");
var Routes = function () {
    return (react_1.default.createElement(index_1.Router, null,
        react_1.default.createElement(index_1.Switch, null,
            react_1.default.createElement(index_1.Route, { exact: true, path: "/", component: WorkoutHistory_1.WorkoutHistory }),
            react_1.default.createElement(index_1.Route, { exact: true, path: "/current-workout", component: CurrentWorkout_1.CurrentWorkout }))));
};
exports.Routes = Routes;
