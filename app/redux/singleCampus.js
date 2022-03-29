import Axios from "axios";

const SET_SINGLE_CAMPUS = 'SET_SINGLE_CAMPUS'

export const setSingleCampus = (campus) => {
  return {
    type: SET_SINGLE_CAMPUS,
    campus
  }
};

export const fetchSingleCampus = (id) => {
  return async (dispatch) => {
    try {
      const response = await Axios.get(`/api/campuses/${id}`);
      const data = response.data;
      dispatch(setSingleCampus(data))
    } catch (err) {
      console.log(err)
    }
  }
};

const initialState = {}
export default function singleCampusReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_CAMPUS:
      return action.campus
    default:
      return state
}}
