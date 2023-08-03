import { useState, useEffect } from 'react';

const APIPlayersURL = "https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-a/players";

export default function PlayerList() {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        async function fetchAllPlayers() {
            try {
                const response = await fetch(APIPlayersURL);
                const players = await response.json();
                console.log(players);
                setPlayers(players.data.players)
            } catch (error) {
                console.error('Uh oh, trouble fetching players!', error);
            }
        }
        fetchAllPlayers();
    }, [])
    const showPlayers = () => {
        if (players) {
            return <>
                {players.map(player =>
                    <div key={player.id}>
                        <div><b>{player.name}</b></div>
                        <div><img src={player.imageUrl} /></div>
                        <button className="seeDetails">See Details</button>
                        <br />
                    </div>
                )}
            </>
        }
        return <div />
    }


    return (
        <div className="playerList">
            <h3>Players List</h3>
            {showPlayers()}
        </div>
    )
}