/* eslint-disable */
import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import imageListReducer from "../reducers/imageListReducer";

const rootReducer = combineReducers(
  { imageList: imageListReducer }
);

const configureStore = () => {
  return createStore( rootReducer, applyMiddleware(thunk) );
}

export default configureStore
