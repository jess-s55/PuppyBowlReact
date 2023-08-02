const APIPlayersURL = "https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-a/players";

export default async function fetchAllPlayers() {
    try {
        const response = await fetch(APIPlayersURL);
          const result = await response.json();
          console.log(result);
          return result.data.players;
    } catch (error) {
        console.error('Uh oh, trouble fetching players!', error);
    }
};

const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(
            `${APIPlayersURL}/${playerId}`
          );
          const result = await response.json();
          console.log(result);  
          return result.data.player;   
    } catch (error) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, error);
    }
};

const addNewPlayer = async (puppy) => {
    try {
        const response= await fetch(`${APIPlayersURL}players`,{
            method: 'POST',
            headers :{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(puppy),
        } );
        const player = await response.json();
        console.log(player);
        fetchAllPlayers();
    } catch (error) {
        console.error('Oops, something went wrong with adding that player!', error);
    }
};

const removePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIPlayersURL}players/${playerId}`,{ 
            method: 'DELETE'
        });
        const players = await response.json();
        fetchAllPlayers();
        window.location.reload();
    } catch (error) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            error
        );
    }
};
