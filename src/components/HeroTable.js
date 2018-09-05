import React from 'react';
import { Table } from 'react-bootstrap';
import HeroRow from './HeroRow';

class HeroTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Hero</th>
            <th>Super-Power</th>
          </tr>
        </thead>
        <tbody>
          <HeroRow hero="Flash" superpower="Velocidade" />
        </tbody>
      </Table>
    )
  }
}

export default HeroTable;