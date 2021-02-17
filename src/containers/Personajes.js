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

       <ul type='square' >

       {
           people.length == 0 ?

        <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
        </div>

            :


         people.map((people,i)=> 
         <Personaje people={people} key={i}/>
       
       )
       //<li><Personaje name={people.name} />
      // </li>)
       }

       </ul>



    )
};