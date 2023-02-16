import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function Navigatorbar() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
			<Container>
				<Navbar.Brand href="#home" className="hg fs-2">
					HG
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#services">Services</Nav.Link>

						<Nav.Link href="#staff">Staff</Nav.Link>
						<Nav.Link href="#contact">Book</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigatorbar;
