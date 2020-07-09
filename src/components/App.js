import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
  const [note, setNote] = useState([]);

  function handleAdd(note) {
    setNote((prevValue) => {
      return [...prevValue, note];
    });
  }
  function onDelete(id) {
    setNote((prevValue) => {
      return prevValue.filter((i, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea add={handleAdd} />
      {note.map((m, index) => {
        return (
          <Note
            delete={onDelete}
            title={m.title}
            content={m.content}
            key={index}
            id={index}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
