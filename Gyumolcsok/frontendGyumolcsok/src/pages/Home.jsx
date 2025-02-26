import * as db from '../services/database.js'
import { useEffect, useState } from 'react'
import CardFruit from '../components/CardFruit'

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
      <div>
        {gyumolcsok.map(gyumolcs => (
          <CardFruit fruit={gyumolcs} key={gyumolcs.gyumolcsid} />
        ))}
      </div>
    </>
  )
}

export default Home