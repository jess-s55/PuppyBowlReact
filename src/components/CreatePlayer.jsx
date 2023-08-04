import { useState } from 'react';

const APIPlayersURL = "https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-a/players";

export default function CreatePlayer() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [status, setStatus] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [teamId, setTeamId] = useState("");
    // const [error, setError] = useState(null);
    
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch (
                APIPlayersURL,
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, breed, status, imageUrl, teamId }),
                }
            );
            const newPlayer = await response.json();
            return newPlayer;
        } catch (error) {
            console.error('Oops, something went wrong with adding that player!', error);
        }
        setName("");
        setBreed("");
        setStatus("");
        setImageUrl("");
        setTeamId("");
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
                <br></br>
                <label>
                    Breed:{""}
                    <input
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                    />
                </label>
                <br></br>
                <label htmlFor="status">Status</label>
                    <select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="field">Field</option>
                        <option value="bench">Bench</option>
                    </select>
                <br></br>
                <label>
                    Image URL:{""}
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </label>
                <br></br>
                <label>
                    Team ID Number:{""}
                    <input
                        value={teamId}
                        onChange={(e) => setTeamId(e.target.value)}
                    />
                </label>
                <br></br>
                <button className="submitButton">Submit</button>
            </form>
        </div>
    )
}