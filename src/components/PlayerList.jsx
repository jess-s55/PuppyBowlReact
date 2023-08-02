import { useState, useEffect } from 'react';
import fetchAllPlayers from '../API/index.js'

export default function PlayerList() {
    const [players, setPlayers] = useState([]);
    useEffect(()=>{
        fetchAllPlayers()
    },[])
}