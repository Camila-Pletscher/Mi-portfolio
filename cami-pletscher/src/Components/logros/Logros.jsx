import React, { useEffect, useState } from "react";
import Menu from "../menu/Menu";
import styles from "./logros.module.css";
import "../styles/global.css";
import LogroList from "./LogroList";

function Logros() {
  const [menu, setmenu] = useState(true);

  const [logro, setLogro] = useState([]);

  useEffect(() => {
    fetch("../data/logros.json")
      .then((resp) => resp.json())
      .then((data) => {
        setLogro(data);
      });
  }, []);

  return (
    <div className={styles.container_logros}>
      <div className="show" onClick={() => setmenu(!menu)}>
        menu
      </div>
      {menu && (
        <div className={styles.container_menu}>
          <Menu />
        </div>
      )}
      <div className={styles.container_logros_right}>
        <div className="cont_title">
          <p>LOGROS</p>
        </div>

        <LogroList logros={logro} />
      </div>
    </div>
  );
}

export default Logros;
