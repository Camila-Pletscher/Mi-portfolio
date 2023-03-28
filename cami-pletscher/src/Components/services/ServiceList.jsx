import React from "react";
import ServicesItem from "./ServicesItem";

function ServiceList(props) {
  return (
    <>
      {props.services.map((service) => (
        <ServicesItem key={service.id} {...service} />
      ))}
    </>
  );
}

export default ServiceList;
