import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
export default function Footer() {
	return (
		<div className="footer-div">
			<div className="container">
				<div className="footer">
					<NavLink to="/contact" exact>
						{" "}
						Contact{" "}
					</NavLink>
					<NavLink to="/privacy" exact>
						{" "}
						Privacy Policy{" "}
					</NavLink>
					<NavLink to="/tou" exact>
						{" "}
						Terms of Use{" "}
					</NavLink>
				</div>
			</div>
		</div>
	);
}
