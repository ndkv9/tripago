import './App.css'
import TripList from './components/TripList'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [trips, setTrips] = useState([])
  const [url, setUrl] = useState('http://localhost:3001/trips')

  const fetchData = async baseUrl => {
    const { data } = await axios.get(baseUrl)
    setTrips(data)
  }

  useEffect(() => {
    fetchData(url)
  }, [url])

  const filterEurope = () => {
    setUrl('http://localhost:3001/trips?loc=europe')
  }

  const filterAll = () => {
    setUrl('http://localhost:3001/trips')
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
