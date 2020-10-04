import React from 'react';
import {Table, ProgressBar,
Pagination} from 'react-bootstrap';

function Tsemuatabel(){
    return(
        <div>
        <Table responsive="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Nama Pemain</th>
        <th>Tim</th>
        <th>Transfer</th>
        <th>Proses Transfer</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>A</td>
        <td>B</td>
        <td>C</td>
        <td><ProgressBar animated now={65} label="65%"/></td>
      </tr>
      <tr>
        <td>2</td>
        <td>A</td>
        <td>B</td>
        <td>C</td>
        <td><ProgressBar animated now={70} label="70%"/></td>
      </tr>
      <tr>
        <td>3</td>
        <td>A</td>
        <td>B</td>
        <td>C</td>
        <td><ProgressBar animated now={75} label="75%"/></td>
      </tr>
      <tr>
        <td>4</td>
        <td>A</td>
        <td>B</td>
        <td>C</td>
        <td><ProgressBar animated now={80} label="80%"/></td>
      </tr>
      <tr>
        <td>5</td>
        <td>A</td>
        <td>B</td>
        <td>C</td>
        <td><ProgressBar animated now={85} label="85%"/></td>
      </tr>
      <tr>
        <td>6</td>
        <td>A</td>
        <td>B</td>
        <td>C</td>
        <td><ProgressBar animated now={90} label="90%"/></td>
      </tr>
    </tbody>
  </Table>
  <Pagination>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item active>{1}</Pagination.Item>
  <Pagination.Ellipsis />

  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>{11}</Pagination.Item>
  <Pagination.Item >{12}</Pagination.Item>
  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item>{14}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{20}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>


  </div>
    )
}

export default Tsemuatabel;