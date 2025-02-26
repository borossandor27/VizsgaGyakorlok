import * as db from '../services/database.js'
import { useEffect, useState } from 'react'

const Home = () => {
  const [gyumolcsok, setGyumolcsok] = useState([])

  useEffect(() => {
    readGyumolcsok()
  }, [])

  const readGyumolcsok = async () => {
    const data = await db.getAllGyumolcs()
    setGyumolcsok(data)
  }
  return (
    <>
      <h1>Gyümölcsök</h1>
      <p>Üdvözöljük a gyümölcsök világában!</p>
      <div>valami
        <button onClick={readGyumolcsok}>Gyumolcsok</button>
      </div>
      <ul>
        {gyumolcsok.map(gyumolcs => (
          <li key={gyumolcs.id}>{gyumolcs.nev}</li>
        ))}
      </ul>
    </>
  )
}

export default Home