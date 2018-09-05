import React from 'react';
import HeroRow from './HeroRow';

class HeroTable extends React.Component {
  constructor(props) {
    super(props);

    this.heroes = this.props.heroes.map((hero) => (
      <HeroRow hero={hero.hero} superpower={hero.superpower} />
    ))
  }

  render() {
    return (
      <div class="mt-3">
        <table className="table table-striped">
          <thead className="thead-light">
            <tr>
              <th>Hero</th>
              <th>Super-Power</th>
            </tr>
          </thead>
          <tbody>
            {this.heroes}
          </tbody>
        </table>
      </div>
    )
  }
}

export default HeroTable;