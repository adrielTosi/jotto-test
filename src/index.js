import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles.css";
import GuessedWords from "./components/guessedWords/GuessedWords";
import Congrats from "./components/Congrats/Congrats";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Jotto Testing</h1>
        <Congrats success={true} />
        <GuessedWords
          guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
        />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
