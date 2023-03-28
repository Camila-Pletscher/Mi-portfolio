import React from "react";
import styles from "./services.module.css";

function Services({scrollToContact}) {
  return (
    <div className={styles.container_services}>
      <div className={styles.title_subtitle}>
        <div className="cont_title">
          <img
            src="https://i.postimg.cc/Gms0qdzC/Mesa-de-trabajo-20.png"
            alt=""
          ></img>
        </div>
        <div className={styles.subtitle}>
          <p>
            Como <span>diseñadora gráfica y web</span> llevo a cabo sitios web con las últimas tendencias en diseño y programación. Siempre atenta a los requerimientos de mis clientes para trabajar de manera conjunta y asi lograr una <span>rápida y eficaz</span> solución a cada problema, asesorando y coordinando hasta el último detalle. Si tenes alguna consulta, no dudes en <div data-replace="contacrme" onClick={scrollToContact}><span>contactarme</span></div>.
          </p>
        </div>
      </div>
      <div>
        <div>
            <div>imagen</div>
            <div>title</div>
            <div>texto</div>
        </div>
      </div>
    </div>
  );
}

export default Services;
