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
  }

  render() {
    return (
      <div>
        <Header />
        <FormHero />
        <HeroTable heroes={this.state.heroes} />
      </div>
    );
  }
}

export default HeroApp;