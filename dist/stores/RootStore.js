"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootStoreContext = exports.RootStore = void 0;
var async_storage_1 = __importDefault(require("@react-native-async-storage/async-storage"));
var mobx_persist_1 = require("mobx-persist");
var react_1 = require("react");
var WorkoutStore_1 = require("./WorkoutStore");
var WorkoutTimerStore_1 = require("./WorkoutTimerStore");
var hydrate = (0, mobx_persist_1.create)({
    storage: async_storage_1.default,
    // default: localStorage
    jsonify: true // if you use AsyncStorage, here shoud be true
    // default: true
});
// when we make a new root store, it hydrates the wworkoutTimer and workout stores; 
// if they are stored in local/async storage, and if they are then it'll save values as they change over time
var RootStore = /** @class */ (function () {
    function RootStore() {
        this.workoutStore = new WorkoutStore_1.WorkoutStore(this);
        this.workoutTimerStore = new WorkoutTimerStore_1.WorkoutTimerStore();
        hydrate('workoutTimer', this.workoutTimerStore);
        hydrate('workout', this.workoutStore);
    }
    return RootStore;
}());
exports.RootStore = RootStore;
exports.RootStoreContext = (0, react_1.createContext)(new RootStore());
