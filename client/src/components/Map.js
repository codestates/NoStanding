/* global kakao */
import React, { useEffect } from "react";
import cn from "classnames";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const { kakao } = window;

const Map = () => {
  useEffect(() => {
    let mapContainer = document.getElementById("map");

    let mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    var map = new kakao.maps.Map(mapContainer, mapOption);
  }, []);

  return (
    <div
      className={cn("MapContainer")}
      id="map"
      style={{ width: "100%", height: "100%", overflow: "none" }}
    ></div>
  );
};

export default Map;
