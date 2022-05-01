import Axios from "axios";

const SET_STUDENTS = 'SET_STUDENTS'
const CREATE_STUDENT = 'CREATE_STUDENTS'
const DELETE_STUDENT = "DELETE_STUDENT";

export const setStudents = (students) => {
  return {
    type: SET_STUDENTS,
    students
  }
};

const _createStudent = (student) => {
  return {
    type: CREATE_STUDENT,
    student,
  };
};


const _deleteStudent = (student) => {
  return {
    type: DELETE_STUDENT,
    student,
  };
};

export const fetchStudents = () => {
  return async (dispatch) => {
    try {
      const response = await Axios.get('/api/friends');
      const data = response.data;
      dispatch(setStudents(data))
    } catch (err) {
      console.log(err)
    }
  }
};

export const createStudent = (student, history) => {
  return async (dispatch) => {
    const { data: created } = await Axios.post("/api/friends", student);
    dispatch(_createStudent(created));
    history.push("/friends");
  };
};


export const deleteStudent = (id, history) => {
  return async (dispatch) => {
    const { data: student } = await Axios.delete(`/api/friends/${id}`);
    dispatch(_deleteStudent(student));
    history.push("/friends");
  };
};

const initialState = []
export default function studentsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students
      case CREATE_STUDENT:
        return [...state, action.student];
        case DELETE_STUDENT:
      return state.filter((student) => student.id !== action.student.id)
      ;
    default:
      return state
}}
