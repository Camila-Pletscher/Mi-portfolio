import React, { useEffect, useRef } from 'react'
import styles from './contact.module.css'
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tjhp5vf",
        "template_tlbdsip",
        e.target,
        "1JHoP3Wqn-9XNDkkG"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    e.target.reset();
  };

  const messageOk = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Su consulta fue enviada con éxito',
        showConfirmButton: false,
        timer: 1500
      })
  }


  return (
    <div className={styles.container_contact}>
      <div data-aos="zoom-out" className='cont_title'>
        <img src='https://i.postimg.cc/7YtJ40fc/Mesa-de-trabajo-18.png' alt=''></img>
      </div>
      <div data-aos="zoom-in" className={styles.cont_form}>
      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.cont_name_email}>
          <div className={styles.name}>
            <label>Nombre:</label>
            <input type="text" name="user_name" />
          </div>
          
          <div className={styles.email}>
            <label>Mail:</label>
            <input type="email" name="user_email" />
          </div>

          
        </div>
          
        <div className={styles.cont_mess}>
          <label>Mensaje:</label>
          <textarea cols="30" rows="10" name="user_message"></textarea>
        </div>
          

          <div className={styles.contSend}>
            <button onClick={messageOk}>
              <div>Enviar</div>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact