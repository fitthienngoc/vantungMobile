import { combineReducers } from 'redux';
import users from './UserReducer';
import homeProducts from './home/ProductReducer';
import cartReducer from './home/CartReducer';
import sidebar from './search/Sidebar'
import productSearch from './search/ProductSearch'

const rootReducer = combineReducers({
  users,
  homeProducts,
  cartReducer,
  sidebar,
  productSearch

});

export default rootReducer;