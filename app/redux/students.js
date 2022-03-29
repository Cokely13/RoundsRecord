import Axios from "axios";

const SET_STUDENTS = 'SET_STUDENTS'

export const setStudents = (students) => {
  return {
    type: SET_STUDENTS,
    students
  }
};

export const fetchStudents = () => {
  return async (dispatch) => {
    try {
      const response = await Axios.get('/api/students');
      const data = response.data;
      dispatch(setStudents(data))
    } catch (err) {
      console.log(err)
    }
  }
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
const initialState = []
export default function studentsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students
    default:
      return state
}}
