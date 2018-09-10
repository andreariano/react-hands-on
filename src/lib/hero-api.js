import axios from "axios";

import Env from "../common/env";

const HeroApi = {
  getAll: () => {
    return axios
      .get(`${Env.heroApiUrl}/heroes`)
      .then(response => {
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  addHero: hero => {
    return axios
      .post(`${Env.heroApiUrl}/heroes`, {
        id: hero.id,
        hero: hero.hero,
        superpower: hero.superpower
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};

export default HeroApi;
