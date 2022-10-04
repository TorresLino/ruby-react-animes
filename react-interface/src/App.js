import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AnimeDAO } from './models/AnimeDAO.js'
import { StatusDAO } from './models/StatusDAO.js'
import Header from './components/Header'
import Search from './components/Search'
import { useEffect, useState } from 'react'
import StatusFilterCheckbox from './components/StatusFilterCheckbox'

var animeDAO = new AnimeDAO()
var statusDAO = new StatusDAO()
var enabled_filters
var search = ""


function App() {
  var [statuses, setStatuses] = useState([])
  var [loaded_animes, setLoadedAnimes] = useState([])
  var [display_animes, setDispAnimes] = useState([])

  useEffect(() => {
    loadData()
  }, []);

  useEffect(() => {
    if(enabled_filters !== undefined)
      onChangeDisplayConditions()
  }, [statuses, loaded_animes])

  const loadData = () => {
    statusDAO.fetchAll().then((res) => { 
      setStatuses(res)      
      enabled_filters = new Set(res.map(s => s.getId()))
    })    
    animeDAO.fetchAll().then((res) => { setLoadedAnimes(res) })
  }

  const onChangeDisplayConditions = () => {
    let filteredAnimes = loaded_animes.filter(a => (enabled_filters.has(a.getStatusId())));
    filteredAnimes = filteredAnimes.filter(a => (a.getTitle().toLowerCase().includes(search) || search == ""))
    setDispAnimes(filteredAnimes)
  }
  
  const onFilterChange = event => {
    if (event.target.checked) {
      enabled_filters.add(parseInt(event.target.id))
    } else {
      enabled_filters.delete(parseInt(event.target.id))
    }
    onChangeDisplayConditions(loaded_animes)
  }

  const onSerchChange = event => {
    search = event.target.value.toLowerCase()
    onChangeDisplayConditions()
  }

  return (
    <div className="App">
      <Header />
      <Search serchChangeEvent={onSerchChange} />
      { statuses.map((s) => { return (
      <StatusFilterCheckbox key={s.getId()} status={s} onSelectionChange={onFilterChange} />
      )})}
      <ul style={{maxWidth: "500px"}}>        
        {display_animes.map(a => {return <li key={a.getId()}>{a.getTitle()}</li>})}
      </ul>
    </div>
  )
}

export default App