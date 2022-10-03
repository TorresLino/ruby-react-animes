import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AnimeDAO } from './models/AnimeDAO.js'
import { Anime } from './models/Anime.js'
import { Status } from './models/Status'
import Header from './components/Header'
import { useEffect, useState } from 'react'
import StatusFilterCheckbox from './components/StatusFilterCheckbox'

var loaded_animes = [
  new Anime(1, 'MiA', 'children', 13, 25, 10, '2017-01-01', 2, 'mia'),
  new Anime(1, 'Beastars', 'furry', 12, 24, 9, '2019-01-01', 1, 'bst'),
  new Anime(1, 'AoT', 'food', 24, 23, 8, '2016-01-01', 1, 'aot')
]
var statuses = [
  new Status(1, 'watched'), new Status(2, 'watching')
]
var enabled_filters = new Set(statuses.map(s => s.getId()))

function App() {  
  const onChangeDisplayConditions = () => {
    console.log(enabled_filters)
    setAnimes(loaded_animes.filter(a => (enabled_filters.has(a.getStatusId()))))
  }
  
  const onFilterChange = event => {
    if (event.target.checked) {
      enabled_filters.add(parseInt(event.target.id))
    } else {
      enabled_filters.delete(parseInt(event.target.id))
    }
    onChangeDisplayConditions();
  }
  var [animes, setAnimes] = useState([])

  return (
    <div className="App">
      <Header />
      { statuses.map((s) => { return (
      <StatusFilterCheckbox key={s.getId()} status={s} onSelectionChange={onFilterChange} />
      )})}
      {animes.map(a => a.getTitle())}
    </div>
  )
}

export default App