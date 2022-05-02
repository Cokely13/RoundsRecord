import Axios from "axios";

const SET_SINGLE_STUDENT = 'SET_SINGLE_STUDENT'
const UPDATE_STUDENT = "UPDATE_STUDENT";

export const setSingleStudent = (student) => {
  return {
    type: SET_SINGLE_STUDENT,
    student
  }
};

const _updateStudent = (student) => {
  return {
    type: UPDATE_STUDENT,
    student
  };
};

export const updateStudent = (student, history) => {
  return async (dispatch) => {
    const { data: updated } = await Axios.put(`/api/students/${student.id}`, student);
    dispatch(_updateStudent(updated));
    history.push(`/students/${student.id}`);
  };
};

export const fetchSingleStudent = (id) => {
  return async (dispatch) => {
    try {
      const response = await Axios.get(`/api/friends/${id}`);
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
      case UPDATE_STUDENT:
          return action.student
    default:
      return state
}}
