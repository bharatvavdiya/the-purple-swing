import React from "react";
import { NavLink } from "react-router-dom";
import "./error.css";
export default function Error() {
	return (
		<div classNam="container">
			<div className="error-div">
				<span>404</span>
				<span>Page Not Found</span>

				<NavLink to="/" exact>
					Go Back
				</NavLink>
			</div>
		</div>
	);
}
