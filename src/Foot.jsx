import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function Foot() {
	return (
		<footer class="py-5 mt-5 bg-dark">
			<Row>
				<Col className="m-3" md={6}>
					<h1 className="fs-1 text-light">Booking</h1>
					<p className="fs-4 text-secondary">
						Due to the Pandemic we are taking extra precautions to ensure the safety of our staff and our highly valued clients. To book an appointment get in touch via the form, let us know what you need and we will get back to you right away for scheduling.{" "}
					</p>
				</Col>

				<Col md={5}>
					{/* <h2 className="text-light">hey</h2> */}
					<Form name="contact" data-netlify="true" method="POST">
						<input type="hidden" name="form-name" value="contact" />
						<Form.Group className="mb-3 text-light" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" name="email" placeholder="Enter email" />
						</Form.Group>

						<Form.Group className="mb-3 text-light fs-4" controlId="Name">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" name="name" placeholder="Name" />
						</Form.Group>
						<Form.Group className="mb-3 text-light fs-4" controlId="Message">
							<Form.Label>Message</Form.Label>
							<Form.Control as="textarea" name="message" rows={3} />
						</Form.Group>
						<Button variant="warning" type="submit">
							Submit
						</Button>
					</Form>
				</Col>
			</Row>
		</footer>
	);
}

export default Foot;
