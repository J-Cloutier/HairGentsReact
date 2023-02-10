import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

function FeaturesCard(props) {
	return (
		<Col md={3}>
			<Card className="rounded-4 border-0 shadow" style={{ width: "18rem" }}>
				<Card.Img className="p-5" variant="top" src={props.img} />
				<Card.Body>
					<Card.Title>{props.name}</Card.Title>
					<Card.Text>{props.description}</Card.Text>
					<Card.Subtitle>{props.price}</Card.Subtitle>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default FeaturesCard;
