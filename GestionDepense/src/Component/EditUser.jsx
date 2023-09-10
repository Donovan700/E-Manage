import React from 'react'
import { Link } from 'react-router-dom'

function EditUser() {
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
                <h1 class="title-show">Edit your user</h1>
                <h3 class="blabla">Edit your user for your application to make it functional</h3>
                <button class="StyleWhy">Why ?</button>
                <button class="StyleMore">More...</button>
            </div>
            <div>
                <form>
                    <legend id="UserTitle">USER FORM</legend>
                    <input type="text" name="IdUser" id="IdUser" placeholder='Id' />
                    <input type="text" name='UserName' id="UserNameEdit" placeholder='Username' />
                    <input type="password" name="Password" id="PasswordEdit" placeholder='Password' />
                    <input type="email" name="Email" id="EmailEdit" placeholder='Mail Adress' />
                    <button class="UserAdd">Edit</button>
                </form>
            </div>
        </>
    )
}

export default EditUser