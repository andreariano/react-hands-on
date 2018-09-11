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
    this.handleEditClicked = this.handleEditClicked.bind(this);
    this.handleDelClicked = this.handleDelClicked.bind(this);
  }

  handleHeroAdded(hero) {
    this.setState({ heroes: [...this.state.heroes, hero] });

    HeroApi.addHero(hero);
  }

  handleEditClicked(heroId){
    console.log(`edit: ${heroId}`);
  }

  handleDelClicked(heroId){
    this.setState({
      heroes: this.state.heroes.filter((hero) => hero.id !== heroId)
    });

    HeroApi.deleteHero(heroId);
  }

  render() {
    return (
      <div>
        <Header />
        <FormHero onHeroAdded={this.handleHeroAdded} />
        <HeroTable 
          heroes={this.state.heroes}
          onEditClicked={this.handleEditClicked}
          onDelClicked={this.handleDelClicked}
        />
      </div>
    );
  }
}

export default HeroApp;
