import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Banner from "./banner/Banner";
import Midcontent from "./mid-content/mid-content";
import Midcontent2 from "./mid-content-2/Midcontent2";
import Footer from "./footer/footer";
function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Banner />
				<Midcontent />
				<Midcontent2 />
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
