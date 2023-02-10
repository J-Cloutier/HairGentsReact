import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";


function PeopleCard(props) {
	return (
		<Col md={3}>
			<Card className="rounded-5 shadow border-0">
				<Card.Img className="rounded-5 p-4 portfolioImg" variant="top" src={props.img} />
				<Card.Body>
					<Card.Title>{props.name}</Card.Title>
					<SocialIcon className="m-1 zoom" style={{ height: 25, width: 25 }} fgColor="#ffffff" title="twitter" url="https://twitter.com/thejordn" />
					<SocialIcon className="m-1 zoom" style={{ height: 25, width: 25 }} fgColor="#ffffff" title="twitter" url="https://instagram.com/thejordn" />
					{/* <Card.Text>{props.description}</Card.Text> */}
					{/* <Card.Subtitle className="mb-2 text-muted">{props.tech}</Card.Subtitle> */}
					{/* <Button className="mt-3" variant="outline-secondary" href={props.liveLink} target="_blank">
						See Live
					</Button> */}
				</Card.Body>
			</Card>
		</Col>
	);
}

export default PeopleCard;
