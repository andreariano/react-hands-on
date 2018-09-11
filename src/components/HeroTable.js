import React from "react";
import PropTypes from 'prop-types';

import HeroRow from "./HeroRow";

class HeroTable extends React.Component {
  constructor(props) {
    super(props);

    this.handleEditClicked = this.handleEditClicked.bind(this);
    this.handleDelClicked = this.handleDelClicked.bind(this);
  }

  handleEditClicked(heroId){
    this.props.onEditClicked(heroId);
  }

  handleDelClicked(heroId){
    this.props.onDelClicked(heroId);
  }

  render() {
    const heroes = this.props.heroes.map(hero => (
      <HeroRow 
        key={hero.id} 
        id={hero.id}
        hero={hero.hero} 
        superpower={hero.superpower} 
        onEditClicked={this.handleEditClicked}
        onDelClicked={this.handleDelClicked}
      />
    ));

    return (
      <div className="mt-3">
        <table className="table table-striped">
          <thead className="thead-light">
            <tr>
              <th>Hero</th>
              <th>Super-Power</th>
              <th>edit</th>
              <th>del</th>
            </tr>
          </thead>
          <tbody>{heroes}</tbody>
        </table>
      </div>
    );
  }
}

HeroTable.propTypes = {
  heroes: PropTypes.array.isRequired,
  onEditClicked: PropTypes.func.isRequired,
  onDelClicked: PropTypes.func.isRequired
}

export default HeroTable;
