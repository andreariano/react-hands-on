import React from 'react';

import HeroTable from './HeroTable'
import FormHero from './FormHero'
import Header from './Header';

class HeroApp extends React.Component {
  constructor(props) {
    super(props);

    this.heroList = [
      {hero: "Flash", superpower: "Velocidade"},
      {hero: "Deadpool", superpower: "Imortalidade"},
      {hero: "Superman", superpower: "Invencibilidade"}
    ];

    this.state = { heroes: this.heroList };

    this.handleHeroAdded = this.handleHeroAdded.bind(this);
  }

  handleHeroAdded(hero) {
    this.setState({ heroes: [...this.state.heroes, hero] });
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