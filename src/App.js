import React, { useState } from "react";
import Note from "./components/Note";
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";

export default function App() {
  const [notes, setNotes] = useState([]);

  // to create new notes
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  //to delete notes
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItems, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateNote onNote={addNote} />
      {notes.map((noteItems, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItems.title}
            content={noteItems.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}
