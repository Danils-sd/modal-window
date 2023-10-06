import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);

  const openHandl = () =>{
    setOpen(!open)
  }
  return (
    <div className="App">
      <button onClick={openHandl}id="open-modal">🎓 Открыть модальное окно</button>
      {open && (
        <div class="modal-wind">
          <button onClick={openHandl} id="close-midal">Назад</button>
          <span class="modal_text">Опа открылось модальное окно</span>
        </div>
      )}
    </div>
  );
}

export default App;
