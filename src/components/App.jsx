import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {/*        

       <Entry
       emoji="ðª "
       name=" Tense Biceps"
       description =  'âYou can do that!â or âI feel strong!â Arm with tense biceps. Also
       used in connection with doing sports, e.g. at the gym."'

       />
       <Entry/>
       <Entry/> */}

        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
