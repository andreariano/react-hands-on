import React from "react";
import HeroRow from "./HeroRow";

class HeroTable extends React.Component {
  render() {
    const heroes = this.props.heroes.map(hero => (
      <HeroRow key={hero.id} hero={hero.hero} superpower={hero.superpower} />
    ));

    return (
      <div className="mt-3">
        <table className="table table-striped">
          <thead className="thead-light">
            <tr>
              <th>Hero</th>
              <th>Super-Power</th>
            </tr>
          </thead>
          <tbody>{heroes}</tbody>
        </table>
      </div>
    );
  }
}

export default HeroTable;
