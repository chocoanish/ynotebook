import './App.css';
import Titles from './components/Titles';
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
      </Router>
    </NoteState>
    </>
  );
}

export default App;
