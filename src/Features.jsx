import React from 'react'
import FeaturesCard from './FeaturesCard';
import { Container, Row } from "react-bootstrap";
import data from "./assets/servicesData";

function Features() {
 	const cards = data.map((item) => {
		return <FeaturesCard key={item.id} id={item.id} name={item.name} img={item.img} description={item.description} price={item.price} />;
	});

	return (
		<Container id="services">
			<h1 class="display-3 text-dark text-end p-5 fw-bold">Services</h1>

			<Row className="cards-list gap-3 justify-content-around">{cards}</Row>
		</Container>
	);
}

export default Features