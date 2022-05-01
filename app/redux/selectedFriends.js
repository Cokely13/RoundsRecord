import Axios from "axios";

const SET_SELECTED = 'SET_SELECTED'
const CREATE_SELECTED = 'CREATE_SELECTED'
const DELETE_SELECTED = "DELETE_SELECTED";
const UPDATE_SELECTED = "UPDATE_SELECTED";


export const setSelected = (friends) => {
  return {
    type: SET_SELECTED,
    friends,
  }
};


const _createSelected = (friend) => {
  return {
    type: CREATE_SELECTED,
    friend,
  };
};

const _updateSelected = (selectedFriends) => {
  return {
    type: UPDATE_SELECTED,
    selectedFriends,
  };
};


const _deleteSelected = (friend) => {
  return {
    type: DELETE_SELECTED,
    friend,
  };
};

export const fetchSelected = () => {
  return async (dispatch) => {
    try {
      const response = await Axios.get('/api/selectedFriends');
      const data = response.data;
      dispatch(setSelected(data))
    } catch (err) {
      console.log(err)
    }
  }
};

export const updateSelected = (selectedFriends, userId) => {
  return async (dispatch) => {
    await Axios.put(`/api/selectedFriends${userId}`, selectedFriends);
    //dispatch(_updateCart(data));
  };
};

export const removeAllFromSelectedFriends = (selectedFriends, userId) => {
  return async (dispatch) => {
    let newFriends = selectedFriends.filter((e)=>{
      if (!!e.name){
        return e.id === -1
      }
    })
    if (userId >0){
      dispatch(updateSelected(newFriends,userId))
      dispatch(setSelected(newFriends))
    } else {
      dispatch(setSelected(newFriends))
    }
  }}

export const createSelected = (friend, history) => {
  return async (dispatch) => {
    const { data: created } = await Axios.post('/api/selectedFriends', friend);
    dispatch(_createSelected(created));
    history.push("/students");
  };
};


export const deleteSelected = (id, history) => {
  return async (dispatch) => {
    const { data: friend } = await Axios.delete(`/api/selectedFriends/${id}`);
    dispatch(_deleteSelected(friend));
    history.push("/selectedFriends");
  };
};

const initialState = []
export default function selectedFriendsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED:
      return action.friends
      case CREATE_SELECTED:
          return state.map((friend) => (friend.id === action.friend.id ? action.friend : friend))
        case DELETE_SELECTED:
      return state.filter((friend => friend.id !== action.friend.id))
    default:
      return state
}}
