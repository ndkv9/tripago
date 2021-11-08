import { useState } from 'react'
import './App.css'
import TripList from './components/TripList'
import { useFetch } from './hooks/helper.hook'

function App() {
  const [showTrips, setShowTrips] = useState(true)

  const baseUrl = 'http://localhost:3001/trips'

  const { data: trips, setUrl, isPending, error } = useFetch(baseUrl)

  const filterEurope = () => {
    setUrl(`${baseUrl}?loc=europe`)
  }

  const filterAll = () => {
    setUrl(baseUrl)
  }

  return (
    <div className='App'>
      <button onClick={() => setShowTrips(!showTrips)}>
        {showTrips ? 'hide trips' : 'show trips'}
      </button>
      {showTrips && <h2>Trip List</h2>}
      {isPending && <div>Loading trips...</div>}
      {error && <div>{error}</div>}
      {showTrips && (
        <TripList
          trips={trips}
          filterEurope={filterEurope}
          filterAll={filterAll}
        />
      )}
    </div>
  )
}

export default App
