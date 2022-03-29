import Axios from "axios";

const SET_SINGLE_STUDENT = 'SET_SINGLE_STUDENT'

export const setSingleStudent = (student) => {
  return {
    type: SET_SINGLE_STUDENT,
    student
  }
};

export const fetchSingleStudent = (id) => {
  return async (dispatch) => {
    try {
      const response = await Axios.get(`/api/students/${id}`);
      const data = response.data;
      dispatch(setSingleStudent(data))
    } catch (err) {
      console.log(err)
    }
  }
};

const initialState = {}
export default function singleStudentReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_STUDENT:
      return action.student
    default:
      return state
}}
