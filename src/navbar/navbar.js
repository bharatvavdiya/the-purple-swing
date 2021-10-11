import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import ReactModal from "react-modal";
import validator from "validator";
import { useState } from "react";
// import { Form } from "react-bootstrap";
import { Select } from "semantic-ui-react";
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
const customStyles2 = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		width: "1000px",
		height: "550px",
		marginRight: "-50%",
		borderradius: "10px",
		transform: "translate(-50%,-50%)",
	},
};

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);
	const [isErrEmail, setIsErrEmail] = useState();
	const [isErrCity, setIsErrCity] = useState();
	const [isToggle, setIsToggle] = useState(false);
	const [city, setCity] = useState("");
	const [email, setEmail] = useState("");
	const [people, setPeople] = useState([]);
	var i = 1;
	const [page, setPage] = useState(i);

	const [users, setUsers] = useState([]);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (email && city) {
			const person = { email, city };
			setPeople((people) => {
				return [...people, person];
			});
			setIsToggle(true);
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
	const weAreOptions = [
		{ key: "1", text: "single female", value: "single female" },
		{ key: "2", text: "single male", value: "single male" },
		{ key: "3", text: "female/male couple", value: "female/male couple" },
		{ key: "4", text: "female/female couple", value: "female/female couple" },
		{ key: "5", text: "male/male couple", value: "male/male couple" },
	];
	const weAreLookOption = [
		{ key: "1", text: "single female", value: "single female" },
		{ key: "2", text: "single male", value: "single male" },
		{ key: "3", text: "female/male couple", value: "female/male couple" },
		{ key: "4", text: "female/female couple", value: "female/female couple" },
		{ key: "5", text: "male/male couple", value: "male/male couple" },
		{ key: "6", text: "anyone", value: "anyone" },
	];
	const Dropdown = () => (
		<Select placeholder="Select your choice" options={weAreOptions} />
	);
	const Dropdown2 = () => (
		<Select placeholder="Select your choice" options={weAreLookOption} />
	);

	return (
		<div className="bg-nav">
			<div className="container">
				<nav className="navbar">
					<span className="title">The Purple Swing</span>
					<div className="nav-right d-flex flex-direction-column">
						<NavLink className="nav-link" to="/">
							How it Works
						</NavLink>
						<NavLink className="nav-link" to="/">
							FAQ
						</NavLink>

						<button className="lnk-capsule" onClick={() => setIsOpen2(true)}>
							Singup
						</button>
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
					<ReactModal style={customStyles2} isOpen={isOpen2}>
						<button className="close-btn" onClick={() => setIsOpen2(false)}>
							<FaTimes></FaTimes>
						</button>
						<div className="sign-div">
							<div className="first-sec">
								<button
									className="btn-back"
									onClick={() => setPage(i--)}
									disabled={page === 1 ? "disabled" : ""}
								>
									<div className="btn-icon">
										<RiArrowLeftSLine></RiArrowLeftSLine>
									</div>
									<div className="btn-text">Back</div>
								</button>
							</div>
							<div className="second-sec">
								{page === 1 && (
									<div>
										<span className="drp-txt">I am / we are: </span>
										<Dropdown />
									</div>
								)}
								{page === 2 && (
									<div>
										<span className="drp-txt">I am / we looking for: </span>
										<Dropdown2 />
									</div>
								)}
								{page === 3 && (
									<div>
										<div>
											<span className="drp-txt">First name: </span>
											<input
												type="text"
												id="fname"
												name="firstname1"
												placeholder="Person 1"
											/>{" "}
										</div>
										<div>
											<span className="drp-txt">First name: </span>
											<input
												type="text"
												id="fname"
												name="firstname2"
												placeholder="Person 2"
											/>{" "}
										</div>
										<span>
											*The name(s) you add above are seen by other users, so if
											it makes you more comfortable, feel free to make them up.
										</span>
									</div>
								)}
								{page === 4 && (
									<div>
										<div>44</div>
									</div>
								)}
							</div>
							<div className="third-sec">
								<button className="btn-next">
									<div className="btn-text" onClick={() => setPage(++i)}>
										Next
									</div>
									<div className="btn-icon">
										<RiArrowRightSLine></RiArrowRightSLine>
									</div>
								</button>
							</div>
						</div>
					</ReactModal>
				</nav>
			</div>
		</div>
	);
}
