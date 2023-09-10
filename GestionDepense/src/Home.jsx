import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'


function Home() {
  const [count, setCount] = useState(0)

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
        <h1>I'm Home</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </>
  )
}

export default Home
