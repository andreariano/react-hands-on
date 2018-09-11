import React from 'react';
import PropTypes from "prop-types";

class FormHero extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      id: Math.floor(Math.random() * 100000), 
      hero: "", 
      superpower: "" 
    };

    this.handleHeroChange = this.handleHeroChange.bind(this);
    this.handleSuperPowerChange = this.handleSuperPowerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.onHeroAdded(this.state);
    this.setState({ 
      id: Math.floor(Math.random() * 100000), 
      hero: "", 
      superpower: "" 
    });
    e.preventDefault();
  }

  handleHeroChange(e) {
    this.setState({ hero: e.target.value });
  }

  handleSuperPowerChange(e) {
    this.setState({ superpower: e.target.value });
  }

  render() {
    return (
      <div className="clearfix">
        <form>
          <div className="form-group">
            <label>Hero</label>
            <input
              className="form-control"
              type="text"
              value={this.state.hero}
              placeholder="Digite o nome do herói"
              onChange={this.handleHeroChange}
            />
          </div>

          <div className="form-group">
            <label>Super-Power</label>
            <input
              className="form-control"
              type="text"
              value={this.state.superpower}
              placeholder="Digite o Super-Poder do herói"
              onChange={this.handleSuperPowerChange}
            />
          </div>
          <div className="float-right">
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

FormHero.propTypes = {
  onHeroAdded: PropTypes.func.isRequired
}

export default FormHero;