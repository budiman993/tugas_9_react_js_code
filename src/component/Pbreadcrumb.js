import React from 'react';
import { Breadcrumb, Container, Row, Col } from 'react-bootstrap';

function Pbreadcrumb(){
	return(
		<Container fluid>
		<Row>
		<Col md={{span : 4, offset:7}}>
		<Breadcrumb>
		<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
		<Breadcrumb.Item href="#">
		Liga Inggris
		</Breadcrumb.Item>
		<Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
		</Breadcrumb>
		</Col>
		</Row>
		</Container>
		)
	}

	export default Pbreadcrumb;