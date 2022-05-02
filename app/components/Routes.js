import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import AllFriends from "./AllFriends";
import SingleFriend from "./SingleFriend";
// import Victory from "./Victory";
import Drinks from "./Drinks";
import Orders from "./Orders";
import Buyer from "./Buyer";
import Pie from "./pie";
import Totals from "./Totals";
import Home from "./home";
import History from "./History";
import Trends from "./Trends";
import Combo from "./Combo";

const Routes = () => {

  return (
    <Router>
      <div>
        <nav>
        <Link className="links" to="/"> Home</Link>
          <Link className="links" to="/friends"> Friends</Link>
          <Link className="links" to="/combo">Purchases</Link>
          {/* <Link className="links" to="/victory">Victory</Link> */}
          <Link className="links" to="/totals">Totals</Link>
          <Link className="links" to="/history">History</Link>
          <Link className="links" to="/trends">Trends</Link>
        </nav>
        <main>
          <Route exact path="/friends" component={AllFriends} />
          <Route exact path="/friends/:friendsId" component={SingleFriend} />
          {/* <Route exact path="/victory" component={Victory} /> */}
          <Route exact path="/drinks" component={Drinks} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/buyers" component={Buyer} />
          <Route exact path="/pie" component={Pie} />
          <Route exact path="/totals" component={Totals} />
          <Route exact path="/" component={Home} />
          <Route exact path="/history" component={History} />
          <Route exact path="/trends" component={Trends} />
          <Route exact path="/combo" component={Combo} />
        </main>
      </div>
    </Router>
  );
};

export default Routes;
