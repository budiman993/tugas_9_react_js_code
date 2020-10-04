import React from 'react';
import {Tabs, Tab } from 'react-bootstrap';
import Psemuatransfer from '../tabel/semuatransfer';
import Tsemuatabel from '../tabel/semuatabel';

function Ptab(){
    return(
        <Tabs defaultActiveKey="Semua Transfer" id="uncontrolled-tab-example" >
  <Tab eventKey="Semua Transfer" title="Semua Transfer">
    <Psemuatransfer />
  </Tab>
  <Tab eventKey="Liga Primer Inggris" title="Liga Primer Inggris" >
    <Tsemuatabel />
  </Tab>
  <Tab eventKey="Serie A" title="Serie A">
  <Tsemuatabel />
  </Tab>
  <Tab eventKey="Divisi Primera" title="Divisi Primera">
  <Tsemuatabel />
  </Tab>
  <Tab eventKey="Bundesliga" title="Bundesliga">
  <Tsemuatabel />
  </Tab>
  <Tab eventKey="Liga 1 Indonesia" title="Liga 1 Indonesia">
  <Tsemuatabel />
  </Tab>
</Tabs>
    )
}
export default Ptab;