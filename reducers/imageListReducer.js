/* eslint-disable */
import { GET_IMAGE_LIST, LOAD_IMAGES_LOADING, SUBMIT_SUCCESS } from "../constants";
import { act } from "react-test-renderer";

const initialState = {
  imageList: [],
  loading: false,
  message: ''
}

const imageListReducer = (state= initialState, action) => {
  console.log('payload', action.payload)
  switch(action.type) {
    case LOAD_IMAGES_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_IMAGE_LIST:
      return {
        ...state,
        imageList: action.payload,
        loading: false
      };
    case  SUBMIT_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false
      }
    default :
      return state
  }
}

export default imageListReducer
