import React from 'react'
import { Link } from 'react-router-dom'

function User() {
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
                <Link to="/add/user"><button class="add">+ Add user</button></Link>
            </div>
            <div>
                <table>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Password</td>
                        <td>Mail</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default User