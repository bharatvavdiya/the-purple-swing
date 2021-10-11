import React from "react";
import banimg from "../img/banner-img.png";
import "./banner.css";
import ReactModal from "react-modal";
import { useState } from "react";
import validator from "validator";
import { FaTimes } from "react-icons/fa";
import "../mid-content/mid-content.css";
import myList from "../img/mylist.png";
import Feed from "../img/feed.png";
import Message from "../img/message.png";
import MyProfile from "../img/profile.png";
import group2 from "../img/group-2.png";
import "../mid-content-2/midcontent2.css";
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
	const [list, setList] = useState(true);
	const [feed, setFeed] = useState(false);
	const [message, setMessage] = useState(false);
	const [profile, setProfile] = useState(false);
	const [setting, setSetting] = useState(false);

	const handleList = () => {
		setList(true);
		setFeed(false);
		setMessage(false);
		setProfile(false);
		setSetting(false);
	};
	const handleFeed = () => {
		setList(false);
		setFeed(true);
		setMessage(false);
		setProfile(false);
		setSetting(false);
	};
	const handleMessage = () => {
		setList(false);
		setFeed(false);
		setMessage(true);
		setProfile(false);
		setSetting(false);
	};
	const handleProfile = () => {
		setList(false);
		setFeed(false);
		setMessage(false);
		setProfile(true);
		setSetting(false);
	};
	const handleSetting = () => {
		setList(false);
		setFeed(false);
		setMessage(false);
		setProfile(false);
		setSetting(true);
	};
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
			<div className="container">
				{/* banner  */}
				<div className="ban-div">
					<div className="text-div">
						{showButton && (
							<h1>
								The Purple Swing is a website <span>where swingers meet.</span>{" "}
								it's free to use.
							</h1>
						)}
					</div>

					<img className="ban-img" src={banimg} alt="banner-img" />
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
								<a href="/">
									And here's a link if you want to reffer a friend.{" "}
								</a>
							</div>
						</div>
					</ReactModal>
				</div>
				{/* banner end */}

				{/* mid-content */}
				<div className="mid-con">
					<p id="first">it look like this...</p>
					<div className="info-div">
						<div className="info-nav mt-1 mb-2">
							<button
								className={list ? "act-btn active" : "act-btn"}
								onClick={handleList}
							>
								My Lists
							</button>
							<button
								className={feed ? "act-btn active" : "act-btn"}
								onClick={handleFeed}
							>
								Feed
							</button>
							<button
								className={message ? "act-btn active" : "act-btn"}
								onClick={handleMessage}
							>
								Messages
							</button>
							<button
								className={profile ? "act-btn active" : "act-btn"}
								onClick={handleProfile}
							>
								Profile
							</button>
						</div>
						<div style={{ margin: "0 10px" }}>
							{list && (
								<img style={{ width: "100%" }} src={myList} alt="list" />
							)}
							{feed && <img style={{ width: "100%" }} src={Feed} alt="feed" />}
							{message && (
								<img style={{ width: "100%" }} src={Message} alt="Message" />
							)}
							{profile && (
								<img
									style={{ width: "100%" }}
									src={MyProfile}
									alt="MyProfile"
								/>
							)}
						</div>
					</div>
					<p id="info">
						*You can click on the different headers in the little screen above
						⬆️ to get a better idea of what the website is like;)
					</p>
				</div>
				{/* mid-content end */}
				{/* mid-content-2 */}
				<div className="mid-con2">
					<div className="exm-img">
						<img src={group2} alt="group-2-img" />
					</div>
					<p class="second">Questions you might have...</p>
					<div className="exm-para">
						<div className="mid">
							<p>
								What is it? — It’s a website where you can meet other swingers.
							</p>

							<p>Is it totally free? — Yes</p>
							<p>
								What about privacy? Do you require face pictures? — No, we
								don’t. We’re open to to whatever level of transparency you’re
								open to. If you want to add photos of your face to your profile,
								that’s cool. And if not, that’s cool too. And yes, you can
								absolutely upload naked photos to your profile, a lot people do.
							</p>
							<p>Are most people on here couples or singles?</p>
							<p> Is there an app? </p>
						</div>
					</div>
				</div>
				{/* mid-content-2 end  */}
			</div>
		</div>
	);
}
