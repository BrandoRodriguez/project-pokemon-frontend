import Card from '../components/Card'
import styles from '../styles/Home.module.css'


export default function home({ minimimosDatos }) {
  return (
    <>
      <div className={styles.home}>
        <div className="container container_home">
          <ul className={styles.column_ul}>
            {minimimosDatos.length === 0 && <p>Loading ...</p>}
            {minimimosDatos.length > 0 && minimimosDatos.map((item, index) => (
              <Card key={index}
                name={item.name}
                id={item.id}
                img={item.sprites}
                types={item.types} />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}


export async function getServerSideProps() {
  const Pokemons = async (Pokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Pokemon}?limit=16`)
    const data = await response.json()
    return data
  }

  let pokemones = []
  for (let i = 1; i <= 16; i++) {
    let data = await Pokemons(i)
    pokemones.push(data)
  }

  let minimimosDatos = pokemones.map(item => {
    return {
      id: item.id,
      name: item.name,
      sprites: item.sprites.other.home.front_default,
      types: item.types
    }
  })

  return {
    props: {
      minimimosDatos
    }
  }
}
