import React from "react";
import emojipedia from "../emojipedia";
import Dictionary from "./Dictionary";

function createDictionary(emojiTerm) {
  return <Dictionary 
  key={emojiTerm.id}
  emoji={emojiTerm.emoji}
  name={emojiTerm.name}
  meaning={emojiTerm.meaning}
  />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      {emojipedia.map(createDictionary)}
    </div>
  );
}

export default App;
