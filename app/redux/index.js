import { combineReducers } from 'redux'
import campusesReducer from './campuses'
import studentsReducer from './students'
import singleStudentReducer from './singleStudent'
import selectedFriendsReducer from './selectedFriends'
import buyerReducer from './buyer'
import ordersReducer from './ordersStore'
import totalsReducer from './totalsStore'


const appReducer = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
  singleStudent: singleStudentReducer,
  selectedFriend: selectedFriendsReducer,
  buyer: buyerReducer,
  orders: ordersReducer,
  totals: totalsReducer
})

export default appReducer
