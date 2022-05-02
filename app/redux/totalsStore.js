import Axios from "axios";

const SET_TOTALS = 'SET_TOTALS'
const CREATE_TOTAL = 'CREATE_TOTAL'
const UPDATE_TOTAL = "UPDATE_TOTAL";


export const setTotals = (totals) => {
  return {
    type: SET_TOTALS,
    totals
  }
};

const _createTotal = (total) => {
  return {
    type: CREATE_TOTAL,
    total,
  };
};

const _updateTotal = (total) => {
  return {
    type: UPDATE_TOTAL,
    total
  };
};


export const fetchTotals = () => {
  return async (dispatch) => {
    try {
      const response = await Axios.get('/api/totals');
      const data = response.data;
      dispatch(setTotals(data))
    } catch (err) {
      console.log(err)
    }
  }
};

export const updateTotal = (total, history) => {
  return async (dispatch) => {
    const { data: updated } = await Axios.put(`/api/totals/${total.id}`, total);
    dispatch(_updateTotal(updated));
    history.push('/pie');
  };
};

export const createTotal = (total, history) => {
  return async (dispatch) => {
    const { data: created } = await Axios.post("/api/totals", total);
    dispatch(_createTotal(created));
    history.push("/pie");
  };
};


const initialState = []
export default function totalsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOTALS:
      return action.totals
      case CREATE_TOTAL:
        return [...state, action.total];
    default:
      return state
}}
