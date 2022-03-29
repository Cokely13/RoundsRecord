import Axios from "axios";

const SET_CAMPUSES = 'SET_CAMPUSES'

export const setCampuses = (campuses) => {
  return {
    type: SET_CAMPUSES,
    campuses
  }
};

export const fetchCampuses = () => {
  return async (dispatch) => {
    try {
      const response = await Axios.get('/api/campuses');
      const data = response.data;
      dispatch(setCampuses(data))
    } catch (err) {
      console.log(err)
    }
  }
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
const initialState = []
export default function campusesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses
    default:
      return state
}}
