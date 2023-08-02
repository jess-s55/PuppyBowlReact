import { useState } from 'react'
import './App.css'
import CreatePlayer from './components/CreatePlayer.jsx';
import PlayerList from './components/PlayerList.jsx'


const APIPlayersURL = "https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-a/players";

function App() {


  return (
 
   
    // <>
      <div>
        <PlayerList />
        <CreatePlayer />
      </div>
  )
}

export default App
