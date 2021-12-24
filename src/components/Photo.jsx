import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  margin: 0 30px;
`;
const Caption = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5em;
  font-weight: 700;
  text-align: center;
  color: ghostwhite;
  text-shadow: 2px 2px 5px black;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 25px;
  object-fit: cover;
  margin: 0 auto;
`;

const loader = new Loader({
  apiKey: process.env.REACT_APP_MAPS_API_KEY,
  version: "weekly",
  libraries: ["places"],
});

const mapOptions = {
  center: {
    lat: 0,
    lng: 0,
  },
  zoom: 4,
};

const Photo = ({ location }) => {
  const ref = useRef();
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    loader
      .load()
      .then((google) => {
        let map = new google.maps.Map(ref.current, mapOptions);
        console.log(map);
        let service = new google.maps.places.PlacesService(map);
        console.log(service);
        let request = {
          query: location || "Aswan, Egypt",
          fields: ["name", "place_id", "photo"],
        };

        service.findPlaceFromQuery(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            results.forEach((result) => {
              console.log(result);
              setPhoto(result?.photos[0].getUrl());
            });
          }
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, [location]);

  return (
    <>
      <div ref={ref} />
      <ImageContainer>
        <Image src={photo} />
        <Caption>{location || "Aswan, Egypt"}</Caption>
      </ImageContainer>
    </>
  );
};

export default Photo;
