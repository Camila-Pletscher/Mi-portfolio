import React from "react";
import styles from "./logros.module.css";
import LogroItem from "./LogroItem";

function LogroList(props) {
  return (
    <div className={styles.container_divs_logros}>
      {props.logros.map((logro) => (
        <LogroItem key={logro.id} place={logro.place} title={logro.title} certificate={logro.certificate} date={logro.date} />
      ))}
    </div>
  );
}

export default LogroList;
