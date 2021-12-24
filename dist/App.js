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
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var CounterStore_1 = require("./stores/CounterStore");
// This file is just the index.tsx file from the common monorepo folder
var App = (0, mobx_react_lite_1.observer)(function () {
    var counterStore = (0, react_1.useContext)(CounterStore_1.CounterStoreContext);
    return (react_1.default.createElement(react_native_1.SafeAreaView, { style: styles.root },
        react_1.default.createElement(react_native_1.Text, { style: styles.text }, "Hello from React Native!"),
        react_1.default.createElement(react_native_1.View, { style: styles.platformRow },
            react_1.default.createElement(react_native_1.Text, { style: styles.text }, "Platform: "),
            react_1.default.createElement(react_native_1.View, { style: styles.platformBackground },
                react_1.default.createElement(react_native_1.Text, { style: styles.platformValue }, "Webberino")),
            react_1.default.createElement(react_native_1.Text, { style: styles.text },
                " ",
                counterStore.count),
            react_1.default.createElement(react_native_1.Button, { title: "Spam Tjolt!", onPress: function () { return counterStore.count++; } }))));
});
exports.default = App;
var styles = react_native_1.StyleSheet.create({
    root: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
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
/*
const App: React.FC = () => {
  const [count, setCount] = useState(0)
  return(
    <View>
      <Text>Wassup</Text>
      <Text> {count}</Text>
      <Button title="increment" onPress= {() => setCount(count+1)}></Button>
    </View>
  );
};

export default App;
*/
/*

DEFAULT App.tsx

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to SIMP FOR GANYU HAHAHAHAHA.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
