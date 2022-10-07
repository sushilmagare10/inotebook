import React, { useState } from "react";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


//to create new note
function CreateNote(props) {

    //for input transition
    const [isExpanded , setIsExpanded] =useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  //to add note using button
  function submitNote(event) {
    props.onNote(note);
    console.log(note);
    event.preventDefault();
  }

  function expand(){
    setIsExpanded(true);
  }


  return (
    <div>
      <form className="create-note">
        {isExpanded && <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
        /> }
        <textarea
          name="content"
          value={note.content}
          onClick={expand}
          onChange={handleChange}
          rows={isExpanded ? 3 : 1}
          placeholder="Create new task"
        />
        <Zoom in={isExpanded}>
            <Fab onClick={submitNote}>
                <AddRoundedIcon/>
            </Fab>
        </Zoom>
    
      </form>
    </div>
  );
}
export default CreateNote;
