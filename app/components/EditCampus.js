import React from 'react';
import { updateCampus, fetchSingleCampus } from '../redux/singleCampus';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';


class EditCampus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      students: this.props.singleCampus.students,
      loading: false,
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log("PROPS", this.state)
    this.setState({loading: true});
    const { id } = this.props.match.params;
    this.props.loadSingleCampus(id);
    this.setState({loading: false})
  }

  // componentWillUnmount() {
  //   this.props.clearTodo();
  // }

  componentDidUpdate(prevProps) {
    if (prevProps.singleCampus.name !== this.props.singleCampus.name || prevProps.singleCampus.address !== this.props.singleCampus.address) {
      this.setState({
        name: this.props.singleCampus.name || '',
        address: this.props.singleCampus.address || ''
      });
  }}

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log("PROPS!!!!!",  this.props.singleCampus)
    this.props.updateCampus({ ...this.props.singleCampus, ...this.state });
    this.setState({
      name: '',
      address: '',
      students: this.props.singleCampus.students
    })
  }

  render() {
    const { name, address } = this.state;
    const { handleSubmit, handleChange } = this;
    const campus = this.props.singleCampus
    const students = campus.students || []


    return (
      <div>
        <div> EDIT CAMPUS </div>
        <form id="campus-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input name="name" onChange={handleChange} value={name} />

          <label htmlFor="address">Address:</label>
          <input name="address" onChange={handleChange} value={address} />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  singleCampus: state.singleCampus
});

const mapDispatchToProps = (dispatch, { history }) => ({
  updateCampus: (campus) => dispatch(updateCampus(campus, history)),
  loadSingleCampus: (id) => dispatch(fetchSingleCampus(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCampus);
