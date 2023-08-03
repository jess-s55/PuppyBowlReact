import { useState } from 'react'
import './App.css'
import CreatePlayer from './components/CreatePlayer.jsx';
import PlayerList from './components/PlayerList.jsx';
import SeeDetails from './components/SeeDetails.jsx';
import { Routes, Route } from "react-router-dom";


const APIPlayersURL = "https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-a/players";

function App() {


  return (
    // <>
      <div>
        <CreatePlayer />
        <Routes>
          <Route path='/' element={<PlayerList />} />
          <Route path='/players/:id' element={<SeeDetails />} />
        </Routes>
        
        {/* <PlayerList /> */}
      </div>
  )
}

export default App
