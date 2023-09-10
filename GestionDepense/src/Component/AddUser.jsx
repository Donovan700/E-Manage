import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';

function AddUser() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    // Déplacez la fonction RegisterMe en dehors de handleSubmit
    const RegisterMe = () => {
        const newUser = {
            UserName: userName,
            Password: password,
            Email: email,
        };

        axios.post('http://127.0.0.1:8000/add/user', newUser)
            .then((response) => {
                alert("User added");
                navigate(`/user`);
            })
            .catch((error) => {
                alert("Error");
                console.log("Error : " + error);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Appelez RegisterMe pour envoyer les données au serveur
        RegisterMe();
    };
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
                <h1 className="title-show">Let's add some Users</h1>
                <h3 className="blabla">Add some user to your application to make it functional</h3>
                <button className="StyleWhy">Why ?</button>
                <button className="StyleMore">More...</button>
            </div>
            <div>
                <form>
                    <legend id="UserTitle">USER FORM</legend>
                    <input type="text" name='UserName' id="UserName" placeholder='Username' />
                    <input type="password" name="Password" id="Password" placeholder='Password' />
                    <input type="email" name="Email" id="Email" placeholder='Mail Adress' />
                    <button className="UserAdd" onClick={ RegisterMe }>Add</button>
                </form>
            </div>
        </>
    )
}

export default AddUser