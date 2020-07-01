import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes,setNotes] = useState([])

  function addNote(newNote){
    console.log(newNote.title);
    setNotes(prev => {
      return [
        ...prev,
        newNote
      ]
    });
  }

  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((note,index) => {
        return id !== index
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, i) => {
        return <Note key={i} id={i} title={noteItem.title} content={noteItem.content} onPress={deleteNote}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
