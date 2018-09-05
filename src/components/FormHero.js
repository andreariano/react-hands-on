import React from 'react';

class FormHero extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hero: "" };

    this.handleHeroChange = this.handleHeroChange.bind(this);
    this.handleSuperPowerChange = this.handleSuperPowerChange.bind(this);
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
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormHero;