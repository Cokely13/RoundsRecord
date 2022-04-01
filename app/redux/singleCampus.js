import Axios from "axios";

const SET_SINGLE_CAMPUS = 'SET_SINGLE_CAMPUS'
const UPDATE_CAMPUS = "UPDATE_CAMPUS";


export const setSingleCampus = (campus) => {
  return {
    type: SET_SINGLE_CAMPUS,
    campus
  }
};

const _updateCampus = (campus) => {
  return {
    type: UPDATE_CAMPUS,
    campus
  };
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

export const updateCampus = (campus, history) => {
  return async (dispatch) => {
    const { data: updated } = await Axios.put(`/api/campuses/${campus.id}`, campus);
    dispatch(_updateCampus(updated));
    history.push(`/campuses/${campus.id}`);
  };
};


const initialState = {}
export default function singleCampusReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_CAMPUS:
      return action.campus
      case UPDATE_CAMPUS:
          return action.campus
    default:
      return state
}}
