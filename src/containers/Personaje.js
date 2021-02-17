import {
    Link
}
from 'react-router-dom';



export default function Personaje ({people}) {
    return (
        <>
            <h1>personaje</h1>
            <li>
            {people.name}>
             <Link to="/character/:id">Detalle</Link>
            </li>
        </>
    )
}