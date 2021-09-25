import React from "react";
import group2 from "../img/group-2.png";
import "./midcontent2.css";
export default function Midcontent2() {
	return (
		<div className="container">
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
							What about privacy? Do you require face pictures? — No, we don’t.
							We’re open to to whatever level of transparency you’re open to. If
							you want to add photos of your face to your profile, that’s cool.
							And if not, that’s cool too. And yes, you can absolutely upload
							naked photos to your profile, a lot people do.
						</p>
						<p>Are most people on here couples or singles?</p>
						<p> Is there an app? </p>
					</div>
				</div>
			</div>
		</div>
	);
}
