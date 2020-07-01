import React,{useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {

  const [isExpanded, setIsExpanded] = useState(false);

  const [note,setNote] = useState({
    title: "",
    content: ""
  })

  function expand() {
    setIsExpanded(true);
  }

  function handleChange(event){
    const {name,value} = event.target;
    setNote(prev => {
      return {
        ...prev,
        [name]:value
      };
    });
  }

  function submitNote(event){
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
      {isExpanded ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}
        <textarea onChange={handleChange} onClick={expand} name="content" placeholder="Take a note..." rows={isExpanded ? "3" : "1"} value={note.content}/>
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
