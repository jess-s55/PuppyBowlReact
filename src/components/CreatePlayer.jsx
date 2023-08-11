// import { useState } from 'react';

// const APIPlayersURL = "https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-a/players";

// export default function CreatePlayer() {
//     const [name, setName] = useState("");
//     const [breed, setBreed] = useState("");
//     const [status, setStatus] = useState("bench");
//     const [imageUrl, setImageUrl] = useState("");
//     const [teamId, setTeamId] = useState("");
//     // const [error, setError] = useState(null);
    
//     async function handleSubmit(event) {
//         event.preventDefault();
//         try {
//             const response = await fetch (
//                 APIPlayersURL,
//                 {
//                     method: "POST",
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({ name, breed, status, imageUrl, teamId }),
//                 }
//             );
//             const newPlayer = await response.json();
//             return newPlayer;
//         } catch (error) {
//             console.error('Oops, something went wrong with adding that player!', error);
//         }
//         setName("");
//         setBreed("");
//         setStatus("bench");
//         setImageUrl("");
//         setTeamId("");
//     }
//     return (
//         <div>
//             <h2>Create Puppy Player</h2>
//             <form className="newPlayerForm" method="POST" onSubmit={handleSubmit}>
//                 <label>
//                     Name:{""}
//                     <input
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                     />
//                 </label>
//                 <br></br>
//                 <label>
//                     Breed:{""}
//                     <input
//                         value={breed}
//                         onChange={(e) => setBreed(e.target.value)}
//                     />
//                 </label>
//                 <br></br>
//                 <label htmlFor="status">Status</label>
//                     <select
//                         id="status"
//                         value={status}
//                         onChange={(e) => setStatus(e.target.value)}
//                     >
//                         <option value="field">Field</option>
//                         <option value="bench">Bench</option>
//                     </select>
//                 <br></br>
//                 <label>
//                     Image URL:{""}
//                     <input
//                         value={imageUrl}
//                         onChange={(e) => setImageUrl(e.target.value)}
//                     />
//                 </label>
//                 <br></br>
//                 <label>
//                     Team ID Number:{""}
//                     <input
//                         value={teamId}
//                         onChange={(e) => setTeamId(e.target.value)}
//                     />
//                 </label>
//                 <br></br>
//                 <button className="submitButton">Submit</button>
//             </form>
//         </div>
//     )
// }
import { useState } from "react"
import { createNewPlayer } from "../API/index.js"

export default function NewPlayerForm({ fetchAllPlayers }) {
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [status, setStatus] = useState('field')
  const [teamId, setTeamId] = useState('')
  
  async function handleSubmit(e) {
    e.preventDefault()
    const newPlayer = {
      name,
      breed,
      imageUrl,
      status,
      teamId
    }
    await createNewPlayer(newPlayer)
    setName('')
    setBreed('')
    setImageUrl('')
    setStatus('field')
    setTeamId('')
    fetchAllPlayers()
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>New Player Form</h1>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="breed">Breed</label>
      <input
        type="text"
        id="breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
      <label htmlFor="imageUrl">Image URL</label>
      <input
        type="text"
        id="imageUrl"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <label htmlFor="status">Status</label>
      <select
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="field">Field</option>
        <option value="bench">Bench</option>
      </select>
      <label htmlFor="team">Team ID</label>
      <input
        type="text"
        id="team"
        value={teamId}
        onChange={(e) => setTeamId(e.target.value)}
      />
      <button className="submit">Submit</button>
    </form>
  )
}