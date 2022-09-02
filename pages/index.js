import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

// export default function Home() {
//   return (
//     <div className={styles.container}>


//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>
//       </main>

//     </div>
//   )
// }

export default function Home() {
  <Head>
    <title>Pokemon App</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  return (
    <>
      <main className={styles.landing_page}>
        <div className={styles.container_landing_page}>
          <div className={styles.hero_image_wrapper}>
            <span className={styles.pokemon}></span>
          </div>
          <>
            <div className={styles.nav}>
              <a href="/" className={styles.ctn_logo}>
                <img
                  className={styles.nav_logo}
                  src="/images/logo.svg"
                  alt="@brandorodriguez"
                />
              </a>
              <a className={styles.btn1} href="/">
                <img src="/images/github.svg" alt="@brandorodriguez" />
              </a>
            </div>
          </>
          <div className={styles.bg_title}>
            <h2 className={styles.title}>Pikachu</h2>
          </div>
          <div className={styles.content_wrapper}>
            <span className={styles.badge}>
              <span>new project</span>
              Pokemon App
            </span>
            <h3 className={styles.h3}>Les´t Go, Pokemons.</h3>
            <p className={styles.p}>
              All the Pokémon data you'll ever need in one place, easily
              accessible through a modern PokeApp.
            </p>
            {/* <a className={styles.btn} >
              Explore now.
            </a> */}
          </div>
        </div>
      </main>
    </>
  )
}
