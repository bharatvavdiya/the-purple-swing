import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import ReactModal from "react-modal";
import validator from "validator";
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
	const [isErrEmail, setIsErrEmail] = useState();
	const [isErrCity, setIsErrCity] = useState();
	const [isToggle, setIsToggle] = useState(false);
	const [city, setCity] = useState("");
	const [email, setEmail] = useState("");
	const [people, setPeople] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (email && city) {
			const person = { email, city };
			setPeople((people) => {
				return [...people, person];
			});
			setIsToggle(true);
			// console.log(people);
			// setCity("");
			// setEmail("");
		}
	};

	const handleEmail = (e) => {
		const emailValue = e.target.value;

		if (validator.normalizeEmail(emailValue)) {
			setIsErrEmail();
			setEmail(emailValue);
			console.log(emailValue);
		} else {
			setIsErrEmail("invalid");
		}
	};

	const handleCity = (e) => {
		const cityValue = e.target.value;

		if (validator.isAlpha(cityValue)) {
			setIsErrCity();
			setCity(cityValue);
			console.log(cityValue);
		} else {
			setIsErrCity("invalid");
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
									// onChange={(e) => setEmail(e.target.value)}
									onChange={handleEmail}
									placeholder="Email"
								/>
								{isErrEmail && (
									<small style={{ color: "#FF0000", "margin-left": "3%" }}>
										Enter valid email
									</small>
								)}
								<input
									type="text"
									id="email"
									name="email"
									value={city}
									// onChange={(e) => setCity(e.target.value)}
									onChange={handleCity}
									placeholder="City"
								/>
								{isErrCity && (
									<small style={{ color: "#ff0000", "margin-left": "3%" }}>
										Enter valid city name
									</small>
								)}
								<button
									type="submit"
									className={isToggle ? "dis-non" : "dis-block"}
									disabled={!email || !city ? "disabled" : ""}
									// onClick={handleMsg}
								>
									Join Waitlist
								</button>
							</form>

							<div className={isToggle ? "confirm-msg" : "confirm-msg dis-non"}>
								<span>Awesome,you're on list!🥳</span>
								<br />
								<a href="/">
									And here's a link if you want to reffer a friend{" "}
								</a>
							</div>
						</div>
					</ReactModal>
				</nav>
			</div>
		</div>
	);
}
