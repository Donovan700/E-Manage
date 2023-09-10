import React from 'react'
import { Link } from 'react-router-dom'

function EditCategorie() {
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
                <h1 class="title-show">Edit your Categorie</h1>
                <h3 class="blabla">Edit your categorie if you've wrong registred</h3>
                <button class="StyleWhy">Why ?</button>
                <button class="StyleMore">More...</button>
            </div>
            <div>
                <form class="CatForm">
                    <legend id="CatTitle">CATEGORIES FORM</legend>
                    <input type="text" name='IdCat' id='IdCat' placeholder='IdCat' />
                    <input type="text" name='CatName' id="CatNameEdit" placeholder='Designation' />
                    <button class="CatAdd">Edit</button>
                </form>
            </div>
        </>
    )
}

export default EditCategorie