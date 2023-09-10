import React from 'react'
import { Link } from 'react-router-dom'

function AddCategorie() {
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
                <h1 class="title-show">Let's add some Categories</h1>
                <h3 class="blabla">Add some categories to add some varieties to your application</h3>
                <button class="StyleWhy">Why ?</button>
                <button class="StyleMore">More...</button>
            </div>
            <div>
                <form class="CatForm">
                    <legend id="CatTitle">CATEGORIES FORM</legend>
                    <input type="text" name='CatName' id="CatName" placeholder='Designation' />
                    <button class="CatAdd">Add</button>
                </form>
            </div>
        </>
    )
}

export default AddCategorie