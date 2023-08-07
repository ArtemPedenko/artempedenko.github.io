import { YMaps, Map, ZoomControl } from "react-yandex-maps";

export default function YandexMap(props) {
  const { lat, lng } = props;
  return (
    <YMaps query={{ apikey: "e44dac90-043e-402c-8f0d-01fcbf571ff5" }}>
      <Map
        width="500px"
        height="500px"
        defaultState={{ center: [lat, lng], zoom: 11 }}
      >
        <ZoomControl />
      </Map>
    </YMaps>
  );
}
