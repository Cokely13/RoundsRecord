import Axios from "axios";

const SET_SINGLE = 'SET_SINGLE'


export const setSingle = (buyer) => {
  return {
    type: SET_SINGLE,
    buyer,
  }
};


export const fetchSingle = (id) => {
  return async (dispatch) => {
    try {
      const response = await Axios.get(`/api/selectedFriends/${id}`);
      const data = response.data;
      dispatch(setSingle(data))
    } catch (err) {
      console.log(err)
    }
  }
};


const initialState = []
export default function buyerReducer(state = initialState, action) {
  switch (action.type) {
      case SET_SINGLE:
      return action.buyer
    default:
      return state
}}
