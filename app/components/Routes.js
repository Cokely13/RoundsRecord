import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import AllCampuses from "./AllCampuses";
import AllStudents from "./AllStudents";
import SingleStudent from "./SingleStudent";
import SingleCampus from "./SingleCampus";
import AddStudent from "./AddStudent";
import AddCampus from "./AddCampus";
import EditCampus from "./EditCampus";
import EditStudent from "./EditStudent";


const Routes = () => {

  return (
    <Router>
      <div>
        <nav>
        <Link className="links" to="/"> Home</Link>
          <Link className="links" to="/campuses"> Campuses</Link>
          <Link className="links" to="/students"> Students</Link>
          <Link className="links" to="/students">Add Student</Link>
          <Link className="links" to="/campuses">Add Campus</Link>
        </nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <Route exact path="/campuses" component={AddCampus} />
          <Route exact path="/campuses" component={AllCampuses} />
          <Route exact path="/students" component={AddStudent} />
          <Route exact path="/students" component={AllStudents} />
          <Route exact path="/students/:studentId" component={SingleStudent} />
          <Route exact path="/students/:studentId" component={EditStudent} />
          <Route exact path="/campuses/:campusId" component={SingleCampus} />
          <Route exact path="/campuses/:campusId" component={EditCampus} />
        </main>
      </div>
    </Router>
  );
};

export default Routes;
