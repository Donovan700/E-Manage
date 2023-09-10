import React from 'react'
import { Link } from 'react-router-dom'


function Depense() {
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
                <Link to="/add/depense"><button class="add">+ Add outcome</button></Link>
                <h2 class="Total">Total Outcomes: { TotalOutcome() }<br/>Total Costs: { TotaltCost() } Ar</h2>
            </div>
            <div>
                <table>
                    <tr>
                        <td>Id</td>
                        <td>User</td>
                        <td>Designation</td>
                        <td>Categories</td>
                        <td>Cost</td>
                        <td>Date</td>
                        <td>Options</td>
                    </tr>
                </table>
            </div>
        </>
    )
}

function TotalOutcome() {
    return 0
}
function TotaltCost() {
    return 0
}

export default Depense