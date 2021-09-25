import React from "react";
import "./mid-content.css";
import { useState } from "react";
import myList from "../img/mylist.png";
import Feed from "../img/feed.png";
import Message from "../img/message.png";
import MyProfile from "../img/profile.png";
export default function Midcontent() {
	const [list, setList] = useState(true);
	const [feed, setFeed] = useState(false);
	const [message, setMessage] = useState(false);
	const [profile, setProfile] = useState(false);
	const handleList = () => {
		setList(true);
		setFeed(false);
		setMessage(false);
		setProfile(false);
	};
	const handleFeed = () => {
		setList(false);
		setFeed(true);
		setMessage(false);
		setProfile(false);
	};
	const handleMessage = () => {
		setList(false);
		setFeed(false);
		setMessage(true);
		setProfile(false);
	};
	const handleProfile = () => {
		setList(false);
		setFeed(false);
		setMessage(false);
		setProfile(true);
	};
	return (
		<div className="container">
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
							My Profile
						</button>
					</div>
					<div style={{ margin: "0 10px" }}>
						{list && <img style={{ width: "100%" }} src={myList} alt="list" />}
						{feed && <img style={{ width: "100%" }} src={Feed} alt="feed" />}
						{message && (
							<img style={{ width: "100%" }} src={Message} alt="Message" />
						)}
						{profile && (
							<img style={{ width: "100%" }} src={MyProfile} alt="MyProfile" />
						)}
					</div>
				</div>
				<p id="info">
					*You can click on the different headers in the little screen above ⬆️
					to get a better idea of what the website is like;)
				</p>
			</div>
		</div>
	);
}
