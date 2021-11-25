import Header from "./Header";
import {BrowserRouter as Router} from "react-router-dom";
import RoutingSwitch from "./RoutingSwitch";
import PostFormModal from "./PostFormModal";
import AuthModal from "./AuthModal";


function Routing() {
  return (
      //this is used to guide the user's browsing on the website
      //it tells the platform which webpage to load under which command / action
    <Router>
      <Header />
      <RoutingSwitch />
      <PostFormModal />
      <AuthModal />
    </Router>
  );
}

export default Routing;