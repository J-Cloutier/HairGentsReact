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
					<Form name="contact v2" method="post" data-netlify="true" onSubmit="submit">
						<input type="hidden" name="form-name" value="contact v2" />
						<Form.Group className="mb-3 text-light">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" required placeholder="Enter email" name="email" />
						</Form.Group>

						<Form.Group className="mb-3 text-light fs-4">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" required placeholder="Name" name="Name" />
						</Form.Group>
						<Form.Group className="mb-3 text-light fs-4">
							<Form.Label>Message</Form.Label>
							<Form.Control as="textarea" required rows={3} name="Message" />
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
