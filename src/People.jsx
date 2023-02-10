import React from "react";
import PeopleCard from "./PeopleCard";
import { Container, Row } from "react-bootstrap";
import data from "./assets/data";

function People() {
	const cards = data.map((item) => {
    return <PeopleCard key={item.id} id={item.id} name={item.name} img={item.img} insta={item.insta} twitter={item.twitter} />;
	});

	return (
		<Container className="portfolio">
			<h1 class="display-3 text-dark p-5 fw-bold">Our Staff</h1>

			<Row className="cards-list gap-3 justify-content-center">{cards}</Row>
		</Container>
	);
}

export default People;
