import React from "react";

import HeroTable from "./HeroTable";
import FormHero from "./FormHero";
import Header from "./Header";

import HeroApi from "../lib/hero-api";

class HeroApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      heroes: [], 
      editingHero: { 
        id: Math.floor(Math.random() * 100000),
        hero: "",
        superpower: ""
      },
      isEditing: false
    };

    HeroApi.getAll().then(heroes => {
      this.setState({ heroes: heroes });
    });

    this.handleHeroAddedOrEdited = this.handleHeroAddedOrEdited.bind(this);
    this.handleEditClicked = this.handleEditClicked.bind(this);
    this.handleDelClicked = this.handleDelClicked.bind(this);
  }

  handleHeroAddedOrEdited(hero) {
    this.setState((state) => { 
      if (!state.isEditing) {
        HeroApi.addHero(hero);

        return { 
          heroes: [...state.heroes, hero],
          editingHero: { 
            id: Math.floor(Math.random() * 100000),
            hero: "",
            superpower: ""
          }
        }
      } else {
        HeroApi.updateHero(hero);

        const { heroes } = state;
        const ix = heroes.findIndex((h) => h.id === hero.id);
        heroes.splice(ix, 1, hero);
        return { 
          heroes,
          editingHero: { 
            id: Math.floor(Math.random() * 100000),
            hero: "",
            superpower: ""
          }
        }
      }
    });
  }

  handleEditClicked(hero){
    this.setState((state) => { 
      return { 
        editingHero: state.heroes.find((h) => h.id === hero.id),
        isEditing: true
      }
    });
  }

  handleDelClicked(heroId){
    this.setState((state) => {
      return { heroes: state.heroes.filter((hero) => hero.id !== heroId) }
    });

    HeroApi.deleteHero(heroId);
  }

  render() {
    const { editingHero } = this.state;

    return (
      <div>
        <Header />
        <FormHero 
          key={editingHero.id}
          id={editingHero.id}
          hero={editingHero.hero}
          superpower={editingHero.superpower}
          onHeroAddedOrEdited={this.handleHeroAddedOrEdited} 
        />
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
