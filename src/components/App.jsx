import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "../Form";
import Note from "../components/Note"
import { useState } from "react/cjs/react.development";


function App(){
    const [notes,setNotes] = useState([]);
    function addNote(note){
        setNotes((prevNotes)=>{
            return [...prevNotes,note];
        });
    }
    function deleteNote(id){
        setNotes((prevNotes)=>{
            return prevNotes.filter((noteItem,index)=>{
                return index !== id;
            });
        });
    }
    return(
        <div className="container">
            <Header />
            <Form onAdd={addNote} />
            
            {notes.map((noteItem,index)=>{
                return <Note
                    key={index}
                    id={index} 
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                />
            })}
            
            <Footer />
        </div>
    );
}

export default App;