import React from "react";

import HeroTable from "./HeroTable";
import FormHero from "./FormHero";
import Header from "./Header";

import HeroApi from "../lib/hero-api";

class HeroApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { heroes: [] };

    HeroApi.getAll().then(heroes => {
      this.setState({ heroes: heroes });
    });

    this.handleHeroAdded = this.handleHeroAdded.bind(this);
  }

  handleHeroAdded(hero) {
    this.setState({ heroes: [...this.state.heroes, hero] });

    HeroApi.addHero(hero);
  }

  render() {
    return (
      <div>
        <Header />
        <FormHero onHeroAdded={this.handleHeroAdded} />
        <HeroTable heroes={this.state.heroes} />
      </div>
    );
  }
}

export default HeroApp;
