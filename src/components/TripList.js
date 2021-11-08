import './TripList.css'

const TripList = ({ trips, filterEurope, filterAll }) => {
  return (
    <div className='trip-list'>
      <ul>{trips && trips.map(trip => <Trip key={trip.id} trip={trip} />)}</ul>
      <div className='filters'>
        <button onClick={filterEurope}>European Trips</button>
        <button onClick={filterAll}>All Trips</button>
      </div>
    </div>
  )
}

const Trip = ({ trip }) => {
  return (
    <li>
      <h3>{trip.title}</h3>
      <p>{trip.price}</p>
    </li>
  )
}
export default TripList
