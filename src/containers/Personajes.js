import {
    useEffect,
    useState
}
from 'react';

import Personaje from "./Personaje";



export default function Personajes() {
    const [people, setPeople]= useState([])

    useEffect(()=>{
        fetch ('https://swapi.dev/api/people/')
        .then(res =>res.json())
        .then(data => {setPeople(data)})


    },[])
  
    console.log(people.results)
    
  
  
  
  
    return (

       <>

       <h1>personaje</h1>
        <h1>personaje</h1>
        <h1>personaje</h1>
        <h1>personaje</h1>
        </>


    )
};