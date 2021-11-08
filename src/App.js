import './App.css'
import TripList from './components/TripList'
import { useFetch } from './hooks/helper.hook'

function App() {
  const baseUrl = 'http://localhost:3001/trips'

  const [trips, setUrl] = useFetch(baseUrl)

  const filterEurope = () => {
    setUrl(`${baseUrl}?loc=europe`)
  }

  const filterAll = () => {
    setUrl(baseUrl)
  }

  return (
    <div className='App'>
      <TripList
        trips={trips}
        filterEurope={filterEurope}
        filterAll={filterAll}
      />
    </div>
  )
}

export default App
