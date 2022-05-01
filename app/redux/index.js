import { combineReducers } from 'redux'
import campusesReducer from './campuses'
import studentsReducer from './students'
import singleCampusReducer from './singleCampus'
import singleStudentReducer from './singleStudent'
import selectedFriendsReducer from './selectedFriends'
import buyerReducer from './buyer'
import ordersReducer from './ordersStore'


const appReducer = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
  singleCampus: singleCampusReducer,
  singleStudent: singleStudentReducer,
  selectedFriend: selectedFriendsReducer,
  buyer: buyerReducer,
  orders: ordersReducer
})

export default appReducer
