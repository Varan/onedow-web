"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_native_1 = require("react-native");
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
var App = function () {
    var _a = (0, react_1.useState)(0), count = _a[0], setCount = _a[1];
    return ((0, jsx_runtime_1.jsxs)(react_native_1.SafeAreaView, __assign({ style: styles.root }, { children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, __assign({ style: styles.text }, { children: "Hello from React Native!" }), void 0), (0, jsx_runtime_1.jsxs)(react_native_1.View, __assign({ style: styles.platformRow }, { children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, __assign({ style: styles.text }, { children: "Platform: " }), void 0), (0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: styles.platformBackground }, { children: (0, jsx_runtime_1.jsx)(react_native_1.Text, __assign({ style: styles.platformValue }, { children: "Webberino" }), void 0) }), void 0), (0, jsx_runtime_1.jsxs)(react_native_1.Text, __assign({ style: styles.text }, { children: [" ", count] }), void 0), (0, jsx_runtime_1.jsx)(react_native_1.Button, { title: "Spam Tjolt!", onPress: function () { return setCount(count + 1); } }, void 0)] }), void 0)] }), void 0));
};
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
