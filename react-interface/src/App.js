import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AnimeDAO } from './models/AnimeDAO.js'
import { StatusDAO } from './models/StatusDAO.js'
import Header from './components/Header'
import Search from './components/Search'
import AnimeDisplay from './components/AnimeDisplay'
import { useEffect, useState } from 'react'
import StatusFilterCheckbox from './components/StatusFilterCheckbox'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

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
    <div className="App" style={{display: "flex", flexDirection: "column",
      alignItems: "center", width: '100%'}}>
      <Header />

      <main style={{maxWidth: "1000px", width: "80%", marginLeft: "10%",
        marginRight: "10%", paddingTop: '50px', paddingBottom: '100px'}}>

        <h1 className='text-start mb-5'>
          Anime List
        </h1>

        <Search serchChangeEvent={onSerchChange} />

        <Container className='text-start my-3'>
          <Row>
            { statuses.map((s) => { return (
            <Col>
              <StatusFilterCheckbox key={s.getId()} status={s} onSelectionChange={onFilterChange} />
            </Col>
            )})}
          </Row>
        </Container>
        
        { display_animes.map(a => { return (<AnimeDisplay key={a.getId()} anime={a} statuses={statuses} />)}) }
      </main>
    </div>
  )
}

export default App