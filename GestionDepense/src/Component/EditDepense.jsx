import React from 'react'
import { Link } from 'react-router-dom'

function EditDepense() {
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
                <h1 class="title-show">Edit your Outcome</h1>
                <h3 class="blabla">Edit your outcome which is already have been registered</h3>
                <button class="StyleWhy">Why ?</button>
                <button class="StyleMore">More...</button>
            </div>
            <div>
                <form class="OutcomeForm">
                    <legend id="OutcomeTitle">OUTCOME FORM</legend>
                    <input type="text" name="IdOutcome" id="IdOutcomeEdit" placeholder='IdOutcome' />
                    <input type="text" name='Cost' id="CostEdit" placeholder='Cost' />
                    <input type="date" name="Date" id="DateEdit" placeholder='Date' />
                    <input type="text" name="Design" id="DesignEdit" placeholder='Designation' />
                    <select name="IdUser" id="IdUserRegistredEdit">
                        <option value="1">Bryan</option>
                        <option value="2">Lucky</option>
                        <option value="3">Juan</option>
                    </select>
                    <select name="IdCat" id="IdCatRegistredEdit">
                        <option value="1">Food</option>
                        <option value="2">Equipment</option>
                        <option value="3">Other</option>
                    </select>
                    <button class="OutcomeAdd">Edit</button>
                </form>
            </div>
        </>
    )
}

export default EditDepense