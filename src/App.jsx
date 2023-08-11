import { useState } from 'react'
import './App.css'
import PlayerList from './pages/PlayerList.jsx';
import SeeDetails from './pages/SeeDetails.jsx';
import { Routes, Route } from "react-router-dom";


const APIPlayersURL = "https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-a/players";

function App() {


  return (
      <div>
        <Routes>
          <Route path='/' element={<PlayerList />} />
          <Route path='/players/:id' element={<SeeDetails />} />
        </Routes>
      </div>
  )
}

// export default App
// import { Routes, Route } from 'react-router-dom'
// import AllPlayers from './pages/AllPlayers'
// import SinglePlayer from './pages/SinglePlayer'
// import './App.css'

// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<AllPlayers/>} />
//         <Route path='/players/:id' element={<SinglePlayer />} />
//       </Routes>
//     </div>
//   )
// }

export default App