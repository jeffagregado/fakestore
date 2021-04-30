import { combineReducers } from "redux";
//import { postReducer } from './postReducers';
import { productReducers } from './productReducers';

export default combineReducers({
    //post: postReducer
    allproducts: productReducers
})