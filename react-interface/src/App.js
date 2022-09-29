import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';

const API_URL = 'http://127.0.0.1:3000/api/animes';


function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
