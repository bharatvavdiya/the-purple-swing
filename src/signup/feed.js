import React from "react";
import "../mid-content/mid-content.css";
import Feedsec from "../img/feedsec.png";
import Feedsec2 from "../img/feedsec2.png";
import Feedsec3 from "../img/feedsec3.png";

export default function Feed() {
	return (
		<div className="mid-container">
			<img className="feed-img" src={Feedsec} alt="feed section" />
			<img className="feed-img" src={Feedsec2} alt="feed section" />
			<img className="feed-img" src={Feedsec3} alt="feed section" />
			<img className="feed-img" src={Feedsec} alt="feed section" />
			<img className="feed-img" src={Feedsec2} alt="feed section" />
			<div className="paging">
				<span>
					1 &nbsp;2 &nbsp;3 &nbsp;4 &nbsp;5 &nbsp;6 &nbsp;7 &nbsp;8 &nbsp;9
				</span>
				<i class="fas fa-chevron-right"></i>
			</div>
		</div>
	);
}
