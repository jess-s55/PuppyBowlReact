import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import PlayerList from './PlayerList.jsx'
const APIPlayersURL = "https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-a/players";

export default function SeeDetails() {
  const [puppy, setPuppy] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function fetchPuppy() {
      const response = await fetch(`${APIPlayersURL}/${id}`);
      const data = await response.json();
      console.log(data)
      setPuppy(data.data.player);
    }
    fetchPuppy();
    
  }, [id]);


  return (
    <div>
      {/* {
        puppy.map((puppy) => {
          return <p onClick={()=>{ setPuppy(puppy.id)}} className="puppyName" key={puppy.id}>{puppy.name}</p>
        })
      } */}
       { puppy && (
        <div className='featuredPup'>
          <h2>{puppy.name}</h2>
          <img src={puppy.imageUrl} />
          <ul>
            <li>ID: {puppy.id}</li>
            <li>Breed: {puppy.breed}</li>
            <li>Status: {puppy.status}</li>
            <li>Team ID: {puppy.teamId}</li>
          </ul>
        </div>
       )}
    </div>
  )
}

