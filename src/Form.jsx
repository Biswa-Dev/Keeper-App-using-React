import React, { useState } from "react";

function Form (props){
    const [note,setNote] = useState({
        title: "",
        content: ""
    });
    function handleChange(event){
        const {name,value} = event.target;
        setNote((prevNote)=>{
            return {
                ...prevNote,
                [name]: value
            };
        });    
    }
    function handleClick(event){
        event.preventDefault();
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
    }
    
    return(
        <div className="form">
            <form>
                <input name="title" type="text" onChange={handleChange} value={note.title} placeholder="Title"  />
                <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3" />
                <button onClick={handleClick}>ADD</button>
            </form>
        </div>
    );
}

export default Form;

