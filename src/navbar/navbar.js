import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import ReactModal from "react-modal";
import { useState } from "react";
ReactModal.setAppElement("#root");
const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		width: "750px",
		height: "500px",
		marginRight: "-50%",
		borderradius: "10px",
		transform: "translate(-50%,-50%)",
	},
};
export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [showInfo, setShowInfo] = useState(false);
	const [showButton, setShowButton] = useState(true);
	const [city, setCity] = useState("");
	const [email, setEmail] = useState("");
	const [people, setPeople] = useState([]);

	const handleMsg = () => {
		setShowInfo(true);
		setShowButton(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (email && city) {
			const person = { email, city };
			setPeople((people) => {
				return [...people, person];
			});
			setCity("");
			setEmail("");
		} else {
			console.log("empty value");
		}
	};
	return (
		<div className="bg-nav">
			<div className="container">
				<nav className="navbar">
					<span className="title">The Purple Swing</span>
					<div className="nav-right d-flex flex-direction-column">
						<NavLink className="nav-link" to="/">
							How it Works
						</NavLink>
						<NavLink className="nav-link" to="/faq">
							FAQ
						</NavLink>
						<button className="lnk-capsule" onClick={() => setIsOpen(true)}>
							Join Waitlist
						</button>
					</div>
					<ReactModal style={customStyles} isOpen={isOpen}>
						<button className="close-btn" onClick={() => setIsOpen(false)}>
							<FaTimes></FaTimes>
						</button>
						<div className="modal-text">
							<p>
								We're planning to launch sometime in late 2021. Enter your email
								and the city you live in below, and we will send you an email.
							</p>
						</div>
						<div className="div-form">
							<form onSubmit={handleSubmit}>
								<input
									type="email"
									id="email"
									name="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Email"
									required
								/>
								<input
									type="text"
									id="email"
									name="email"
									value={city}
									onChange={(e) => setCity(e.target.value)}
									placeholder="City"
									required
								/>
								{showButton && (
									<button
										type="submit"
										disabled={!email || !city ? "disabled" : ""}
										onClick={handleMsg}
									>
										Join Waitlist
									</button>
								)}
							</form>

							{showInfo && (
								<div className="confirm-msg">
									<span>Awesome,you're on list!🥳</span>
									<br />
									<a href="/">And here's a link if you want to reffer your </a>
								</div>
							)}
						</div>
					</ReactModal>
				</nav>
			</div>
		</div>
	);
}
