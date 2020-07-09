import React, {useState} from 'react';

function CreateArea(props) {
  const [note, setNote] = useState({title: '', content: ''});
  function HandleonChange(e) {
    const {name, value} = e.target;
    setNote((prevValue) => {
      return {...prevValue, [name]: value};
    });
  }

  function handleClick(e) {
    e.preventDefault();
    props.add(note);
  }
  return (
    <div>
      <form>
        <input onChange={HandleonChange} name="title" placeholder="Title" />
        <textarea
          onChange={HandleonChange}
          name="content"
          placeholder="Write your note.."
          rows="5"
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
