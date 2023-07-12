import React from "react";
import ServicesItem from "./ServicesItem";

function ServiceListEn(props) {
  return (
    <>
      {props.services.map((service) => (
        <ServicesItem key={service.id} {...service} />
      ))}
    </>
  );
}

export default ServiceListEn;
