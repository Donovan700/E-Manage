import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';

function User() {
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/user')
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des utilisateurs :', error);
            });
    }, []);
    const [users, setUsers] = useState([]);
    const GoToEdit = (pk) => {
        navigate(`/edit/user`);
    }
    const DeleteMe = (pk) => {
        axios.post(`http://localhost:8000/user/${pk}`)
            .then((response) => {
                // Gérer la réussite de la suppression si nécessaire
                alert('Utilisateur supprimé avec succès.');
                navigate(`http://localhost:8000/user`)
            })
            .catch((error) => {
                // Gérer les erreurs de suppression si nécessaire
                alert('Erreur lors de la suppression de l\'utilisateur.');
                console.error('Erreur lors de la suppression de l\'utilisateur :', error);
            });
    }
    console.log(users);
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
                        <td>Options</td>
                    </tr>
                    {users.map((user) => (
                        <tr key={user.IdUser}>
                            <td>{user.IdUser || ''}</td>
                            <td>{user.UserName || ''}</td>
                            <td>{user.Passwd || ''}</td>
                            <td>{user.UserMail || ''}</td>
                            <td colSpan={2}>
                                <button onClick={() => GoToEdit(user.IdUser)}>Edit</button>
                                <button onClick={() => DeleteMe(user.IdUser)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}

export default User