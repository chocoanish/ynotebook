import './App.css';
import Titles from './components/Titles';
import NotesInfo from './components/NotesInfo';
import NoteState from './context/notes/noteState';
import {
  BrowserRouter as Router,
  // Switch,
  // Route
} from 'react-router-dom';


function App() {
  return (
    <>
    <NoteState>
      <Router>
      <Titles />
      <NotesInfo />
      </Router>
    </NoteState>
    </>
  );
}

export default App;
