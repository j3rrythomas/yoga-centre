import React from "react";

export default function Map() {
  const map_src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAYAp6GZGRSQGqyXeq_xH0_eCbAuoOKwZg&q=Happy+Yoga,Trivandrum1`;
  return (
    <iframe
      className="map-embed"
      title="Embedded Map"
      style={{ border: "0", borderRadius: "5%" }}
      loading="lazy"
      allowFullScreen
      src={map_src}
    ></iframe>
  );
}
