import Axios from "axios";

const SET_ORDERS = 'SET_ORDERS'
const CREATE_ORDER = 'CREATE_ORDER'


export const setOrders = (orders) => {
  return {
    type: SET_ORDERS,
    orders
  }
};

const _createOrder = (order) => {
  return {
    type: CREATE_ORDER,
    order,
  };
};


export const fetchOrders = () => {
  return async (dispatch) => {
    try {
      const response = await Axios.get('/api/orders');
      const data = response.data;
      dispatch(setOrders(data))
    } catch (err) {
      console.log(err)
    }
  }
};

export const createOrder = (order, history) => {
  return async (dispatch) => {
    const { data: created } = await Axios.post("/api/orders", order);
    dispatch(_createOrder(created));
    history.push("/orders");
  };
};


const initialState = []
export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORDERS:
      return action.orders
      case CREATE_ORDER:
        return [...state, action.order];
    default:
      return state
}}
