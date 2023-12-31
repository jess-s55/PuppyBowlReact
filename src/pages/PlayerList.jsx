// import { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import {deletePlayer} from '../API/index.js';

// const APIPlayersURL = "https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-a/players";


// export default function PlayerList() {
//     const [allPlayers, setAllPlayers] = useState([]);
//     const [players, setPlayers] = useState([]);
//     const [searchQuery, setSearchQuery] = useState('');
//     useEffect(() => {
//         async function fetchAllPlayers() {
//             try {
//                 const response = await fetch(APIPlayersURL);
//                 const players = await response.json();
//                 setAllPlayers(players.data.players)
//                 setPlayers(players.data.players)
//             } catch (error) {
//                 console.error('Uh oh, trouble fetching players!', error);
//             }
//         }
//         fetchAllPlayers();

//     }, [])
    
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const filteredPlayers = allPlayers.filter(player =>
//                 player.name.toLowerCase().includes(searchQuery.toLowerCase())
//             )
//             setPlayers(filteredPlayers)
//         } catch (error) {
//             console.error('Uh oh, trouble searching for players!', error);
//         }
//     };

//     const handleChange = (event) => {
//         event.preventDefault();
//         try {
//             const filteredPlayers = allPlayers.filter(player =>
//                 player.name.toLowerCase().includes(searchQuery.toLowerCase())
//             )
//             setPlayers(filteredPlayers)
//         } catch (error) {
//             console.error('Uh oh, trouble searching for players!', error);
//         }
//         setSearchQuery(event.target.value);
//     };

//     const showPlayers = () => {
//         if (players) {
//             return <>
//                 {players.map(player =>
//                     <div key={player.id}>
//                         <div><b>{player.name}</b></div>
//                         <div><img src={player.imageUrl} /></div>
//                         <Link className="seeDetails" to={`/players/${player.id}`}>See Details</Link>
//                         <button className="deletePuppy" onClick={() => deletePlayer(player.id)}>Delete Puppy</button>
//                         <br />
//                     </div>
                    
//                 )}
//             </>
//         }
//         return <div />
//     }

//     const showSearchBar = () => {
//         return <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
//             <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={handleChange}
//                 placeholder="Enter your player name..."
//                 style={{
//                     padding: '8px',
//                     fontSize: '16px',
//                     borderRadius: '4px',
//                     border: '1px solid #ccc',
//                 }}
//             />
//             <button
//                 type="submit"
//                 style={{
//                     marginLeft: '8px',
//                     padding: '8px 12px',
//                     fontSize: '16px',
//                     borderRadius: '4px',
//                     background: 'blue',
//                     color: '#fff',
//                     border: 'none',
//                     cursor: 'pointer',
//                 }}
//             >
//                 Search
//             </button>
//         </form>
//     }

//     return (
//         <div className="playerList">
//             <h3>Players List</h3>
//             {showSearchBar()}
//             {showPlayers()}
//         </div>
//     )
// }
import { useState, useEffect } from "react"
import { fetchAllPlayers } from "../API"
import PlayerCard from "../components/PlayerCard"
import CreatePlayer from "../components/CreatePlayer"

export default function AllPlayers() {
  const [players, setPlayers] = useState([])
  const [filteredPlayers, setFilteredPlayers] = useState([])
  async function fetchData() {
    const data = await fetchAllPlayers()
    setPlayers(data)
    setFilteredPlayers(data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  function handleSubmit(e) {
    e.preventDefault()
    const search = e.target.value
    const filteredPlayers = players.filter((player) => {
      return player.name.toLowerCase().includes(search.toLowerCase())
    })
    setFilteredPlayers(filteredPlayers)
  }
  return (
    <>
      <CreatePlayer fetchAllPlayers={fetchData}/>
      <section>
        <h1>All Players</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">Search</label>
          <input onChange={handleSubmit} type="text" id="search" />
        </form>
        <main>
          {
            filteredPlayers.map((player) => (
              <PlayerCard
                key={player.id}
                player={player}
                fetchAllPlayers={fetchData}
              />
            ))
          }
        </main>
      </section>
    </>
  )
}