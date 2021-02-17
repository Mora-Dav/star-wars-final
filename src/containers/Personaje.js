import {
    Link
}
from 'react-router-dom';



export default function Personaje ({people}) {
    return (
        <>
            
            <li>
                   <h1>
                   {people.name}
                   </h1>     
                  <p>
                   {people.url}
                  </p>
                   
                    
            </li>
        </>
    )
}