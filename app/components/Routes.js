import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import AllCampuses from "./AllCampuses";
import AllStudents from "./AllStudents";

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>Welcome!
        <Link to="/"> Home</Link>
          <Link to="/campuses"> Campuses</Link>
          <Link to="/students"> Students</Link>
        </nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <p>This seems like a nice place to get started with some Routes!</p>
          <Route path="/campuses" component={AllCampuses} />
          <Route path="/students" component={AllStudents} />
        </main>
      </div>
    </Router>
  );
};

export default Routes;
