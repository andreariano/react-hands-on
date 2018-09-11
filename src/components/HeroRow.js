import React from "react";
import PropTypes from 'prop-types';

class HeroRow extends React.Component {
  constructor(props){
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDel = this.handleDel.bind(this);
  }

  handleEdit(heroId) {
    this.props.onEditClicked(heroId);
  }

  handleDel(heroId) {
    this.props.onDelClicked(heroId);
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
        <td>
          <button 
            type="button" 
            className="btn btn-default btn-sm btn btn-outline-secondary"
            onClick={() => this.handleEdit({
              id: this.props.id,
              hero: this.props.hero,
              superpower: this.props.superpower
            })}
          >edit
          </button>
        </td>
        <td>
          <button 
            type="button" 
            className="btn btn-default btn-sm btn-outline-danger"
            onClick={() => this.handleDel(this.props.id)}
          >del
          </button>
        </td>
      </tr>
    )
  }
}

HeroRow.propTypes = {
  id: PropTypes.number.isRequired,
  hero: PropTypes.string.isRequired,
  superpower: PropTypes.string.isRequired,
  onEditClicked: PropTypes.func.isRequired,
  onDelClicked: PropTypes.func.isRequired
}

export default HeroRow;