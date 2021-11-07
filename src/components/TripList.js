const TripList = ({ trips }) => {
  return (
    <div className='trip-list'>
      <h2>Trip List</h2>
      <ul>
        {trips.map(trip => (
          <Trip key={trip.id} trip={trip} />
        ))}
      </ul>
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
