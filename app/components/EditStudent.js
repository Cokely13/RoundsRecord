import React from 'react';
import { updateStudent } from '../redux/students';
import {fetchSingleStudent} from "../redux/singleStudent"
import { connect } from 'react-redux';

class EditStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log("this .props", this.props)
    const { id } = this.props.match.params;
    this.props.fetchSingleStudent(id);
  }

  // componentWillUnmount() {
  //   this.props.clearTodo();
  // }

  componentDidUpdate(prevProps) {
    if (prevProps.singleStudent.id !== this.props.singleStudent.id) {
      this.setState({
        firstName: this.props.singleStudent.firstName || '',
        lastName: this.props.singleStudent.lastName || '',
        email: this.props.singleStudent.email || ''
      });
      this.props.fetchSingleStudent(this.props.student);
  }}

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateStudent({ ...this.props.singleStudent, ...this.state });
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
    })
  }

  render() {
    const { firstName, lastName, email } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <div>
        <div> EDIT STUDENT </div>
        <form id="student-form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input name="firstName" onChange={handleChange} value={firstName} />

          <label htmlFor="lastName">Last Name:</label>
          <input name="lastName" onChange={handleChange} value={lastName} />

          <label htmlFor="email">Email:</label>
          <input name="email" onChange={handleChange} value={email} />


          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({singleStudent}) => ({
  singleStudent
});

const mapDispatchToProps = (dispatch, { history }) => ({
  updateStudent: (student) => dispatch(updateStudent(student, history)),
  fetchSingleStudent: (id) => dispatch(fetchSingleStudent(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);
