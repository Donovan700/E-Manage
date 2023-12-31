import React from 'react'
import { Link } from 'react-router-dom'

function Categorie() {
    return (
        <>
            <nav>
                <h1 className='title'>e-manage</h1>
                <ul>
                    <li><Link className='lien' to="/">Home</Link></li>
                    <li><Link className='lien' to="/categorie">Categorie</Link></li>
                    <li><Link className='lien' to="/user">User</Link></li>
                    <li><Link className='lien' to="/depense">Depense</Link></li>
                </ul>
            </nav>
            <div>
                <Link to="/add/categorie"><button class="add">+ Add Categories</button></Link>
            </div>
            <div>
                <table>
                    <tr>
                        <td>Id</td>
                        <td>Designation</td>
                        <td>Options</td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Categorie