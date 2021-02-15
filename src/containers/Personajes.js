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
        .then(data => {setPeople(data.results)})


    },[])
  
    console.log(people)
  
    return (

       <ul>
       {people.map((people,i)=> 
       <li>{people.name}</li>)
       }



       </ul>



    )
};