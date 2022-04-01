import React from 'react';
import { updateCampus } from '../redux/campuses';
import {fetchSingleCampus} from "../redux/singleCampus"
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';

class EditCampus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchSingleCampus(id);
  }

  // componentWillUnmount() {
  //   this.props.clearTodo();
  // }

  componentDidUpdate(prevProps) {
    if (prevProps.singleCampus.id !== this.props.singleCampus.id) {
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
    this.props.updateCampus({ ...this.props.singleCampus, ...this.state });
  }

  render() {
    const { name, address } = this.state;
    const { handleSubmit, handleChange } = this;

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

const mapStateToProps = ({ singleCampus }) => ({
  singleCampus
});

const mapDispatchToProps = (dispatch, { history }) => ({
  updateCampus: (campus) => dispatch(updateCampus(campus, history)),
  fetchSingleCampus: (id) => dispatch(fetchSingleCampus(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCampus);
