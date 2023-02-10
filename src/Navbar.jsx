import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function Navigatorbar() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home" className="hg fs-2">HG</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#features">Home</Nav.Link>
						<Nav.Link href="#pricing">Services</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="#deets">Staff</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Book
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigatorbar;
