import {
    Link
}
from 'react-router-dom';



export default function Personaje ({personaje}) {
    return (
        <>
            <h1>personaje</h1>
            <li>
                <Link to="/character/:id">Detalle</Link>
            </li>
        </>
    )
}