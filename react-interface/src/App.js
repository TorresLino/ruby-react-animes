import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnimeDAO } from './models/AnimeDAO.js';

import Header from './components/Header';
import { useEffect, useState } from 'react';

const API_URL = 'http://127.0.0.1:3000/api/animes';

var adao = new AnimeDAO();
var title;

function App() {  
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    let mounted = true
    adao.fetchAll().then((res) => {
      if(mounted)
        setAnimes(res.map(a => a.getTitle()));
    });
    return () => (mounted = false);
  }, [])
  return (
    <div className="App">
      <Header />
      {animes}
    </div>
  );
}

export default App;
