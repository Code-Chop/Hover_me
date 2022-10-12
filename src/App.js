
import React,{useState,useEffect} from 'react';
import Pokemonlist from "./Pokemonlist"
import axios from 'axios';
import Pagination from './Pagination';


function App() {
  const[pokemon,setPokemon]=useState([])
  const[currentPg,setCurrentPg]=useState("https://pokeapi.co/api/v2/pokemon")
  const[nextPg,setNextPg]=useState()
  const[prevPg,setPrevPg]=useState()
  const[loading,setLoading]=useState(false)
  useEffect(()=>{
    let cancel
    setLoading(true)
    axios.get(currentPg,{
      cancelToken:new axios.CancelToken(c=>cancel=c)
    }).then(res=>{
      setLoading(false)
  setNextPg(res.data.next)
  setPrevPg(res.data.previous)
  setPokemon(res.data.results.map(p=>p.name))
})
return()=>{
  cancel()
}
},[currentPg])
if(loading)return "Loading.."

function getNextPg(){
  setCurrentPg(nextPg)
}
function getPrevPg(){
  setCurrentPg(prevPg)
}



return (
    <>
    <Pokemonlist pokemon={pokemon}/>
    <Pagination getNextPg={nextPg?getNextPg:null}
    getPrevPg={prevPg?getPrevPg:null}/>
    </>

  );
}

export default App;
