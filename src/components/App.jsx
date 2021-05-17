import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";



function App() {
  return (
    <div>
        <h1>
          <span>emojipedia</span>
        </h1>
   <d1 className="dictionary">  
  { emojipedia.map( EmojiTerm =>
(<Entry
key={EmojiTerm.id}
emoji={EmojiTerm.emoji}
emojitext={EmojiTerm.name}
emojidescription={EmojiTerm.meaning}
 />
 ))}
 
     </d1>
     </div>  
  );
}

export default App;
