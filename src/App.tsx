import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

// This file is just the index.tsx file from the common monorepo folder

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.root}>
{/*      <Image style={styles.logo} source={LogoSrc} />           */}
      <Text style={styles.text}>Hello from React Native!</Text>
      <View style={styles.platformRow}>
        <Text style={styles.text}>Platform: </Text>
        <View style={styles.platformBackground}>
          <Text style={styles.platformValue}>Webberino</Text>
        </View>
        <Text style={styles.text}> {count}</Text>
        <Button title="Spam Tjolt!" onPress={() => setCount(count+1)}></Button>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
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
    borderWidth: StyleSheet.hairlineWidth,
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
