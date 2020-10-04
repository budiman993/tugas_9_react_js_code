import React from 'react';
import './css/bootstrap.min.css';
import {Container, Row, Col, Spinner, Table} from 'react-bootstrap';
import Ptab from './component/Ptab';
import Ppopover from './component/Ppopover';
import Pversiweb from './component/Pversiweb';
import Pnavbar from './component/Pnavbar';
import Pbreadcrumb from './component/Pbreadcrumb';



function App() {
  return (
    <div>
      <Pnavbar />
      <Pbreadcrumb />
      <Container>
        <Row>
          <Col><h2>Rumor Transfer Pemain</h2></Col>
          <Col align="right">
          <Spinner animation="border" variant="success" />
          <Spinner animation="grow" variant="success" />
          </Col>
        </Row>
        <Row>
          <Col><Ptab /></Col>
        </Row>
        <Row>
        <Table borderless responsive="sm">
        <thead>
          <tr>
            <td width="30px" align="right"><Ppopover /></td>
            <td><Pversiweb /></td>
          </tr>
        </thead>
      </Table>
        </Row>
      </Container>
      <br />
     
      
    </div>
  );
}

export default App;
