import { combineReducers } from "redux";
//import { postReducer } from './postReducers';
import { productReducers, selectedProductReducer } from './productReducers';

export default combineReducers({
    //post: postReducer
    allproducts: productReducers,
    product: selectedProductReducer
})