import { Link } from 'react-router-dom';
import { deletePlayer, fetchAllPlayers } from '../API';

export default function PlayerCard({ player, fetchAllPlayers }) {
  const { id, name, breed, imageUrl } = player;
  async function handleClick(id) {
    await deletePlayer(id);
    await fetchAllPlayers();
  }
  return (
    <div className="playerCard" key={id}>
      <h2>Name: {name}</h2>
      <p>Breed: {breed}</p>
      <img src={imageUrl} alt={name} />
      <div>
        <Link className="seeDetailsButton" to={`/players/${id}`}>See Details</Link>
        <button className="deleteButton" onClick={() => handleClick(id)}>Delete Player</button>
      </div>
    </div>
  )
}