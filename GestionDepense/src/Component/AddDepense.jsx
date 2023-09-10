import React from 'react'
import { Link } from 'react-router-dom'

function AddDepense() {
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
                <h1 class="title-show">Let's add some Outcome</h1>
                <h3 class="blabla">Add the form for your outcome</h3>
                <button class="StyleWhy">Why ?</button>
                <button class="StyleMore">More...</button>
            </div>
            <div>
                <form class="OutcomeForm">
                    <legend id="OutcomeTitle">OUTCOME FORM</legend>
                    <input type="text" name='Cost' id="Cost" placeholder='Cost' />
                    <input type="date" name="Date" id="Date" placeholder='Date' />
                    <input type="text" name="Design" id="Design" placeholder='Designation' />
                    <select name="IdUser" id="IdUserRegistred">
                        <option value="1">Bryan</option>
                        <option value="2">Lucky</option>
                        <option value="3">Juan</option>
                    </select>
                    <select name="IdCat" id="IdCatRegistred">
                        <option value="1">Food</option>
                        <option value="2">Equipment</option>
                        <option value="3">Other</option>
                    </select>
                    <button class="OutcomeAdd">Add</button>
                </form>
            </div>
        </>
    )
}

export default AddDepense