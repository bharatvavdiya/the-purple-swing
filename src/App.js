import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Banner from "./banner/Banner";
import Footer from "./footer/footer";
import Profile from "./signup/profile";
import Feed from "./signup/feed";
import Error from "./signup/Error";
import Gototop from "./Next";
import "semantic-ui-css/semantic.min.css";
function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Gototop />
				<Switch>
					<Route path="/" component={Banner} exact={true}></Route>
					<Route path="/profile" component={Profile} exact={true}></Route>
					<Route path="/feed" component={Feed} exact={true}></Route>
					<Route component={Error} exact={true}></Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
