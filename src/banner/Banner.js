import React from "react";
import banimg from "../img/banner-img.png";
import "./banner.css";
// import ReactModal from "react-modal";
import { useState } from "react";
// import { FaTimes } from "react-icons/fa";
// ReactModal.setAppElement("#root");
// const customStyles = {
// 	content: {
// 		top: "50%",
// 		left: "50%",
// 		right: "auto",
// 		bottom: "auto",
// 		width: "350px",
// 		height: "550px",
// 		marginRight: "-50%",
// 		transform: "translate(-50%,-50%)",
// 	},
// };
export default function Banner() {
	// const [isOpen, setIsOpen] = useState(false);
	const [showInfo, setShowInfo] = useState(false);
	const [showButton, setShowButton] = useState(true);
	// const [city, setCity] = useState("");
	// const [email, setEmail] = useState("");
	// const [people, setPeople] = useState([]);

	const handleMsg = () => {
		setShowInfo(true);
		setShowButton(false);
	};

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	if (email && city) {
	// 		const person = { email, city };
	// 		setPeople((people) => {
	// 			return [...people, person];
	// 		});
	// 		setCity("");
	// 		setEmail("");
	// 	} else {
	// 		console.log("empty value");
	// 	}
	// };
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
						<button className="lnk-capsule ban-btn" onClick={handleMsg}>
							Join Waitlist
						</button>
					)}
					{showInfo && (
						<h1 className="show-msg">
							Hey there! We don’t have a mobile version of our platform yet, so
							for now you’ll have to use your desktop. You can access it using
							the same address you’re at now thepurpleswing.com . See you over
							there!
						</h1>
					)}
				</div>

				{/* <ReactModal style={customStyles} isOpen={isOpen}>
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
								<button type="submit" onClick={handleMsg}>
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
				</ReactModal> */}
			</div>
		</div>
	);
}
