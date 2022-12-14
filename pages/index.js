import Image from 'next/image'
import styles from '../styles/LandingPage.module.css'
import { data } from '../pages/api/data'
import Link from 'next/link'
import PageLayout from '../components/PageLayout'

export default function Home() {
  return (
    <PageLayout title='Pokemon App'>
      <div className={styles.landing_page}>
        <div className="container container_LandingPage">
          <div className={styles.hero_image_wrapper}>
            <span className={styles.pokemon}></span>
          </div>
          <>
            <div className={styles.nav}>
              <span className={styles.ctn_logo}>
                <Image
                  src='/images/logo.svg'
                  alt='@brandorodriguez'
                  width={140}
                  height={51}
                />
              </span>
              <span className={styles.btn1}>
                <Image src='/images/github.svg' alt='@brandorodriguez' width={28} height={28} />
              </span>
            </div>
          </>
          <div className={styles.bg_title}>
            <h2 className={styles.title}>{data.title}</h2>
          </div>
          <div className={styles.content_wrapper}>
            <span className={styles.badge}>
              <span>new project</span>
              {data.project}
            </span>
            <h3 className={styles.h3}>{data.subtitle}</h3>
            <p className={styles.p}>
              {data.description}
            </p>
            <span className={styles.btn}>
              <Link href="/home">
                Explore now.
              </Link>
            </span>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
