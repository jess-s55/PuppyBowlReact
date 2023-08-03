import { useState, useEffect } from 'react';

export default function SeeDetails() {
  const [puppies, setPuppies] = useState(puppyList);
  const [details, setDetails] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === pupDetails);
  console.log(featuredPup);
  console.log(puppies);
  
  return (
    <div>
      {
        puppies.map((puppy) => {
          return <p onClick={()=>{ setDetails(puppy.id)}} className="puppyName" key={puppy.id}>{puppy.name}</p>
        })
      }
       { details && (
        <div className='featuredPup'>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>ID: {featuredPup.id}</li>
            <li>Breed: {featuredPup.breed}</li>
            <li>Status: {featuredPup.status}</li>
            <li>Team ID: {featuredPup.teamId}</li>
          </ul>
        </div>
       )}
    </div>
  )
}

