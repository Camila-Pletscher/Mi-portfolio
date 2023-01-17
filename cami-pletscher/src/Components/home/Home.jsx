import React from 'react'
import styles from './home.module.css'

function Home() {
  return (
    <div className={styles.container_home}>
        <div className={styles.container_logo_txt}>
            <div className={styles.container_logo}>
                <img src='https://i.postimg.cc/vZP57FxV/Principal.png' alt=''></img>
            </div>
            <div>
                <div>HOLA!</div>
                <div>SOY CAMILA</div>
                <div>Graphic Designer & Front end developer</div>
                <div>Soy Cami y te invito a que me conozcas a mi y a mi trabajo.</div>
            </div>
            <div>
                <button>Descargar cv</button>
                <button>Contacto</button>
            </div>
            <div>
                <button>^</button>
            </div>
        </div>
        <div className={styles.container_profile}>
            <img src='https://i.postimg.cc/W1NByrWk/selfie-fondogris.png' alt=''></img>
        </div>
    </div>
  )
}

export default Home