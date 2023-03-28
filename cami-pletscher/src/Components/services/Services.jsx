import React, { useEffect } from "react";
import ServiceList from "./ServiceList";
import styles from "./services.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Services({ scrollToContact }) {

  useEffect(() => {
    AOS.init();
  }, []);

    const services = [
        {
            image: "https://i.postimg.cc/2yZ9p8P4/Mesa-de-trabajo-23services.png",
            title: "Desarrollo web",
            text: "Desarrollo a medida de cada requerimiento. Programación en HTML, CSS, JAVASCRIPT y ReactJs"
        },
        {
            image: "https://i.postimg.cc/mZv6YCHV/Mesa-de-trabajo-24services.png",
            title: "Diseño UX",
            text: "Como diseñadora presto especial atención a estar alineados a la imagen de la marca y a brindar una buena experiencia al usuario."
        },
        {
            image: "https://i.postimg.cc/HWch8BVV/Mesa-de-trabajo-25services.png",
            title: "Diseño responsive",
            text: "Diseños adaptativos que se pueden visualizar y navegar de manera amigable desde cualquier dispositivo móvil: notebooks, tablets, celulares, etc."
        },
        {
            image: "https://i.postimg.cc/DZmYgc6p/Mesa-de-trabajo-26services.png",
            title: "Hosting",
            text: "Podemos registrar dominios .com.ar o .com y también un servicio de hosting. Este servicio es tercerizado."
        },
        {
            image: "https://i.postimg.cc/SQ1y7yLD/Mesa-de-trabajo-27services.png",
            title: "Mantenimiento",
            text: "Mantenimiento web en caso de solicitarlo. Ya sea para actualizar el sistema, hacer alguna modificación o simplemente cargar contenido."
        }

    ]


  return (
    <div className={styles.container_services}>
      <div className={styles.title_subtitle}>
        <div data-aos="zoom-out" className="cont_title">
          <img
            src="https://i.postimg.cc/Gms0qdzC/Mesa-de-trabajo-20.png"
            alt=""
          ></img>
        </div>
        <div data-aos="zoom-in" className={styles.subtitle}>
          <p>
            Como <span>diseñadora gráfica y web</span> llevo a cabo sitios web
            con las últimas tendencias en diseño y programación. Siempre atenta
            a los requerimientos de mis clientes para trabajar de manera
            conjunta y asi lograr una <span>rápida y eficaz</span> solución a
            cada problema, asesorando y coordinando hasta el último detalle. Si
            tenes alguna consulta, no dudes en{" "}
            <div onClick={scrollToContact}>
              <span>contactarme</span>
            </div>
            .
          </p>
        </div>
      </div>
      <div className={styles.cont_list_services}>
        <ServiceList services={services}/>
      </div>
    </div>
  );
}

export default Services;
