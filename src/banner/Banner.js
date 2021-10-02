import React from "react";
import banimg from "../img/banner-img.png";
import "./banner.css";
import ReactModal from "react-modal";
import { useState } from "react";
import validator from "validator";
import { FaTimes } from "react-icons/fa";
ReactModal.setAppElement("#root");
const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		width: "350px",
		height: "550px",
		marginRight: "-50%",
		transform: "translate(-50%,-50%)",
	},
};
export default function Banner() {
	const [isOpen, setIsOpen] = useState(false);
	const [showButton, setShowButton] = useState(true);
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
		<div className="bg-ban">
			<div className="container ban-div">
				<div className="text-div">
					{showButton && (
						<h1>
							The Purple Swing is a website <span>where swingers meet.</span>{" "}
							it's free to use.
						</h1>
					)}
				</div>

				<img class="ban-img" src={banimg} alt="banner-img" />
				<div className="modal-div">
					{showButton && (
						<button
							className="lnk-capsule ban-btn"
							onClick={() => setIsOpen(true)}
						>
							Join Waitlist
						</button>
					)}
				</div>

				<ReactModal style={customStyles} isOpen={isOpen}>
					<button className="close-btn " onClick={() => setIsOpen(false)}>
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
								onChange={handleEmail}
								placeholder="Email"
								// pattern=".+@globex\.com"
								size="30"
								required
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
								onChange={handleCity}
								placeholder="City"
								// pattern="^[a-zA-Z]$"
								required
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
							>
								Join Waitlist
							</button>
						</form>

						<div className={isToggle ? "confirm-msg" : "confirm-msg dis-non"}>
							<span>Awesome,you're on list!🥳</span>
							<br />
							<a href="/">And here's a link if you want to reffer a friend. </a>
						</div>
					</div>
				</ReactModal>
			</div>
		</div>
	);
}
