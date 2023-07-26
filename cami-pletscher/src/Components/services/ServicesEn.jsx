import React, { useEffect } from "react";
import styles from "./services.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceListEn from "./ServiceListEn";

function ServicesEn({ scrollToContact }) {

  useEffect(() => {
    AOS.init();
  }, []);

    const services = [
        {
            image: "https://i.postimg.cc/2yZ9p8P4/Mesa-de-trabajo-23services.png",
            title: "Web development",
            text: "Custom development for every need. Programming in HTML, CSS, JAVASCRIPT y ReactJs"
        },
        {
            image: "https://i.postimg.cc/mZv6YCHV/Mesa-de-trabajo-24services.png",
            title: "UX design",
            text: "As a graphic designer, I pay special attention to brand consistency and user experience."
        },
        {
            image: "https://i.postimg.cc/HWch8BVV/Mesa-de-trabajo-25services.png",
            title: "Responsive design",
            text: "Customizable designs that are visually appealing and navigable from any mobile device: notebooks, tablets, phones, and more."
        },
        {
            image: "https://i.postimg.cc/DZmYgc6p/Mesa-de-trabajo-26services.png",
            title: "Hosting",
            text: "We can register domain .com.ar or .com and also a hosting service. This service is outsourced."
        },
        {
            image: "https://i.postimg.cc/SQ1y7yLD/Mesa-de-trabajo-27services.png",
            title: "Support",
            text: "Web support when you need it. Whether it is for updating the sistem, making any modification or uploading new content."
        }

    ]


  return (
    <div className={styles.container_services}>
      <div className={styles.title_subtitle}>
        <div data-aos="zoom-out" className="cont_title">
          <img
            src="https://i.postimg.cc/1RrpL2Jt/Mesa-de-trabajo-20-copia.png"
            alt="my services"
          ></img>
        </div>
        <div data-aos="zoom-in" className={styles.subtitle}>
          <p>
            As a <span>graphic and web designer</span> I make websites with the latest trends. Always attentive to the requeriments of my clients to work together and achieve a 
            <span> fast and effective</span> solution to any problem. If you have any question, don't hesitate to {" "}
            <div onClick={scrollToContact}>
              <span>contact me</span>
            </div>
            .
          </p>
        </div>
      </div>
      <div className={styles.cont_list_services}>
        <ServiceListEn services={services}/>
      </div>
    </div>
  );
}

export default ServicesEn;
