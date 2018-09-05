import React from "react";
import PropTypes from 'prop-types';

class HeroRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.hero}
        </td>
        <td>
          {this.props.superpower}
        </td>
      </tr>
    )
  }
}

HeroRow.propTypes = {
  hero: PropTypes.string.isRequired,
  superpower: PropTypes.string.isRequired
}

export default HeroRow;