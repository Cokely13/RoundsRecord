import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import AllCampuses from "./AllCampuses";
import AllStudents from "./AllStudents";
import SingleStudent from "./SingleStudent";
import SingleCampus from "./SingleCampus";
import AddStudent from "./AddStudent";
import AddCampus from "./AddCampus";

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
          <Link to="/students">Add Student</Link>
          <Link to="/campuses">Add Campus</Link>
          <Route exact path="/campuses" component={AddCampus} />
          <Route exact path="/campuses" component={AllCampuses} />
          <Route exact path="/students" component={AddStudent} />
          <Route exact path="/students" component={AllStudents} />
          <Route path="/students/:studentId" component={SingleStudent} />
          <Route path="/campuses/:campusId" component={SingleCampus} />
        </main>
      </div>
    </Router>
  );
};

export default Routes;
