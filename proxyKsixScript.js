import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 100,
  duration: "10s",
};

export default () => {
  const randomArtistId = () => { return (Math.floor(Math.random() * 6000000) + 1000000); };
  const currentID = Math.random() < .7 ? 2222222 : randomArtistId();
  let res = http.get(`http://18.191.82.134:3998/artists/albums/${currentID}`);
  check(res, {
    "status was 200": (r) => r.status == 200,
    "transaction time OK": (r) => r.timings.duration < 2000
  });
};

