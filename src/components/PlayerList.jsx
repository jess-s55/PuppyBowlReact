import { useState, useEffect } from 'react';

const APIPlayersURL = "https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-a/players";

export default function PlayerList() {
    const [players, setPlayers] = useState([]);
    useEffect(()=>{
        async function fetchAllPlayers() {
            try {
                const response = await fetch(APIPlayersURL);
                const players = await response.json();
                console.log(players);
                setPlayers(players)
            } catch (error) {
                console.error('Uh oh, trouble fetching players!', error);
            }
        }
        fetchAllPlayers();
    },[])
    return(
        <div className="playerList">
            <h3>{players.name}</h3>
            <img src={players.imageUrl} />
        </div>
    )
}