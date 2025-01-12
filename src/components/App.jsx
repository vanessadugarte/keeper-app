import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";

function App() {
  return (
    <div>
      <Header />
        <div>
        {notes.map(note => (
            <Note
                key={note.key}
                title={note.title}
                content={note.content}

            />
        ))}
        </div>
      <Footer />
    </div>
  );
}

export default App;
