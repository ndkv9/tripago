import './App.css'
import TripList from './components/TripList'
import { useFetch } from './hooks/helper.hook'

function App() {
  const baseUrl = 'http://localhost:3001/trips'

  const { data: trips, setUrl, isPending } = useFetch(baseUrl)

  const filterEurope = () => {
    setUrl(`${baseUrl}?loc=europe`)
  }

  const filterAll = () => {
    setUrl(baseUrl)
  }

  return (
    <div className='App'>
      <h2>Trip List</h2>
      {isPending && <div>Loading trips...</div>}
      <TripList
        trips={trips}
        filterEurope={filterEurope}
        filterAll={filterAll}
      />
    </div>
  )
}

export default App
