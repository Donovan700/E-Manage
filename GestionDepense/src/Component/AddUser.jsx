import React from 'react'
import { Link } from 'react-router-dom'

function AddUser() {
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
                <form>
                    <input type="text" name="IdUser" id="IdUser" placeholder='Id' />
                    <input type="text" name='UserName' id="UserName" placeholder='Username' />
                    <input type="password" name="Password" id="Password" placeholder='Password' />
                    <input type="email" name="Email" id="Email" placeholder='Mail Adress' />
                    <button>Add</button>
                </form>
            </div>
        </>
    )
}

export default AddUser