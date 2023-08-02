import { useState } from 'react';

const APIPlayersURL = "https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-a/players";

export default function CreatePlayer() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [status, setStatus] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [teamId, setTeamId] = useState(null);
    // const [error, setError] = useState(null);
    
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch (
                APIPlayersURL,
                {
                    method: "POST",
                    body: JSON.stringify({ name, breed, status, imageUrl, teamId }),
                }
            );
            const result = await response.json();
        } catch (error) {
            console.error('Oops, something went wrong with adding that player!', error);
        }
        setName("");
        setBreed("");
        setStatus("");
        setImageUrl("");
        setTeamId(null);
    }
    return (
        <div>
            <h2>Create Puppy Player</h2>
            <form method="POST" onSubmit={handleSubmit}>
                <label>
                    Name:{""}
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
            </form>
        </div>
    )
}