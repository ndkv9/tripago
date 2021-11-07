import './App.css'
import TripList from './components/TripList'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/trips').then(({ data }) => setTrips(data))
  }, [])

  return (
    <div className='App'>
      <TripList trips={trips} />
    </div>
  )
}

export default App
