import React from "react";
import "../mid-content/mid-content.css";
import Profileimg from "../img/profile-img.png";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiInformationLine } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Profile() {
	const [setting, setSetting] = useState(false);
	const [vacation, setVacation] = useState(false);
	const handleVacationMode = (e) => {
		if (vacation === false) {
			setVacation(true);
		} else {
			setVacation(false);
		}
	};
	return (
		<div className="mid-container sroll-container">
			<div className="scroll-obj">
				<div className="img-div">
					<div className="head heading-mr">
						<h2>Photos</h2>
					</div>
					<div className="photos-row">
						<img src={Profileimg} alt="profile img" />
						<img src={Profileimg} alt="profile img" />
						<div>
							<label htmlFor="img-upload">
								<i
									class="fa fa-plus"
									style={{
										fontSize: "20px",
										padding: "43px",
										border: "3px solid #D6D6D6",
										borderRadius: "8px",
										marginLeft: "10px",
										color: "#D6D6D6",
									}}
									aria-hidden="true"
								></i>
							</label>
							<input
								type="file"
								style={{ display: "none" }}
								name="img-upload"
								id="img-upload"
							/>
						</div>
					</div>
				</div>
				<div className="about-div">
					<div className="head heading-mr">
						<h2>
							About <RiInformationLine></RiInformationLine>
						</h2>
					</div>
					<div>
						<textarea rows="10" cols="165" />
						<br />
						<small>3000 (Recommended Maximum)</small>
					</div>
				</div>
				<div className="per1-div">
					<div className="head">
						<h2>Jim</h2>
					</div>
					<div className="detail-div">
						<div>
							<label htmlFor="gender">Gender: </label>
							<select name="gender" id="gender">
								<option>Select gender</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
						</div>
						<div>
							<label htmlFor="sexualori">Sexual orientation: </label>
							<select name="sexualori" id="sexualori">
								<option>Select Sexual orientation</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
								<option value="anyone">Anyone</option>
							</select>
						</div>
						<div>
							<label htmlFor="height">Height: </label>
							<input type="number" name="height" id="height" />
						</div>
						<div>
							<label htmlFor="smokes">Smokes: </label>
							<select name="smokes" id="smokes">
								<option>Do you smoke ?</option>
								<option value="yes">Yes</option>
								<option value="no">No</option>
								<option value="occasionally">occasionally</option>
							</select>
						</div>
						<div>
							<label htmlFor="drinks">Drinks: </label>
							<select name="drinks" id="drinks">
								<option>Do you drink ?</option>
								<option value="yes">Yes</option>
								<option value="no">No</option>
								<option value="occasionally">occasionally</option>
							</select>
						</div>
					</div>
				</div>
				<div className="per2-div">
					<div className="head">
						<h2>Kate</h2>
					</div>
					<div className="detail-div">
						<div>
							<label htmlFor="gender">Gender: </label>
							<select name="gender" id="gender">
								<option>Select gender</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
						</div>
						<div>
							<label htmlFor="sexualori">Sexual orientation: </label>
							<select name="sexualori" id="sexualori">
								<option>Select Sexual orientation</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
								<option value="anyone">Anyone</option>
							</select>
						</div>
						<div>
							<label htmlFor="height">Height: </label>
							<input type="number" name="height" id="height" />
						</div>
						<div>
							<label htmlFor="smokes">Smokes: </label>
							<select name="smokes" id="smokes">
								<option>Do you smoke ?</option>
								<option value="yes">Yes</option>
								<option value="no">No</option>
								<option value="occasionally">occasionally</option>
							</select>
						</div>
						<div>
							<label htmlFor="drinks">Drinks: </label>
							<select name="drinks" id="drinks">
								<option>Do you drink ?</option>
								<option value="yes">Yes</option>
								<option value="no">No</option>
								<option value="occasionally">occasionally</option>
							</select>
						</div>
					</div>
				</div>
				<div className="we-div">
					<div className="head">
						<h2>We</h2>
					</div>
					<div className="detail-div">
						<div>
							<label htmlFor="gender">Relationship status: </label>
							<select name="rel-status" id="rel-status">
								<option>Select relationship status</option>
								<option value="Married">Married</option>
								<option value="Live-in">Live-in</option>
								<option value="Friends">Friends</option>
								<option value="Casual">Casual</option>
							</select>
						</div>
						<div>
							<label htmlFor="lookingfor">Looking for: </label>
							<select name="lookingfor" id="lookingfor">
								<option>We looking for</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
								<option value="anyone">Anyone</option>
							</select>
						</div>
						<div>
							<label htmlFor="speaks">Speak: </label>
							<select name="speaks" id="speaks">
								<option>Speak</option>
								<option value="english">English</option>
								<option value="german">German</option>
								<option value="spanish">Spanish</option>
							</select>
						</div>
					</div>
				</div>
				<div className="head">
					<h2>Settings / Preferences / Others</h2>
				</div>
				<div className="detail-div">
					<div className="flx">
						<div className="mode">
							<span>Vacation Mode </span>
							<input
								type="checkbox"
								onChange={handleVacationMode}
								name="vaction"
								id="vaction"
							/>
							<label htmlFor="vaction" id="vaction"></label>
						</div>
						<div className="location-div">
							<div className="country">
								<label
									htmlFor="country"
									disabled={vacation ? "" : "disabled"}
									className={vacation ? "" : "fnt-color"}
								>
									Country:{" "}
								</label>
								<select
									name="country"
									id="country"
									disabled={vacation ? "" : "disabled"}
								>
									<option></option>
									<option>England</option>
									<option>USA</option>
								</select>
							</div>
							<div className="city">
								<label
									htmlFor="city"
									className={vacation ? "" : "fnt-color"}
									disabled={vacation ? "" : "disabled"}
								>
									City:{" "}
								</label>
								<select
									name="city"
									id="city"
									disabled={vacation ? "" : "disabled"}
								>
									<option></option>
									<option value="yes">London</option>
									<option value="no">Manchaster</option>
									<option value="no">New York</option>
								</select>
							</div>
						</div>
					</div>
					<div className="info-msg">
						*Turn on vacation mode and select the country and city you’re going
						away to if you want to see couples there. You will appear in their
						feed as well.
					</div>
				</div>
				<div className="acc-options">
					<Link to="/privacypolicy">
						Privacy Policy &nbsp;&nbsp;
						<i class="fas fa-chevron-right"></i>
					</Link>
					<Link to="/termsofuse">
						Terms of Use &nbsp; &nbsp;
						<i class="fas fa-chevron-right"></i>
					</Link>
					<Link to="/logout">
						Log out &nbsp;&nbsp;<i class="fas fa-chevron-right"></i>
					</Link>
					<Link to="/deleteaccount">
						Delete account &nbsp;&nbsp;
						<i class="fas fa-chevron-right"></i>
					</Link>
				</div>
			</div>
		</div>
	);
}
