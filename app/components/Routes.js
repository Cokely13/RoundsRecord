import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import AllStudents from "./AllStudents";
import SingleStudent from "./SingleStudent";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";
import Victory from "./Victory";
import Drinks from "./Drinks";
import Orders from "./Orders";
import Buyer from "./Buyer";

const Routes = () => {

  return (
    <Router>
      <div>
        <nav>
        <Link className="links" to="/"> Home</Link>
          <Link className="links" to="/students"> Students</Link>
          <Link className="links" to="/students">Add Student</Link>
          <Link className="links" to="/drinks">Drinks</Link>
          <Link className="links" to="/victory">Victory</Link>
        </nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <Route exact path="/students" component={AddStudent} />
          <Route exact path="/students" component={AllStudents} />
          <Route exact path="/students/:studentId" component={SingleStudent} />
          <Route exact path="/students/:studentId" component={EditStudent} />
          <Route exact path="/victory" component={Victory} />
          <Route exact path="/drinks" component={Drinks} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/buyers" component={Buyer} />
        </main>
      </div>
    </Router>
  );
};

export default Routes;
