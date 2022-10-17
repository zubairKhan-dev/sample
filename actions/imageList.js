/* eslint-disable */

import { GET_IMAGE_LIST, LOAD_IMAGES_LOADING, SUBMIT_SUCCESS } from "../constants";
import { Platform } from "react-native";

export function setImageList(pageList) {
  return {
    type: GET_IMAGE_LIST,
    payload: pageList,
  };
}
export function getImageList(num) {
  const formData = new FormData();
  formData.append('user_id', '108')
  formData.append('offset', num)
  formData.append('type', 'popular')
  return (dispatch) => {
    dispatch({ type: LOAD_IMAGES_LOADING });
    try {
      fetch('http://dev3.xicom.us/xttest/getdata.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: formData
      }).then((response) => response.json())
        .then(async (responseJson) => {
          const apiReq = responseJson.images
          await dispatch(setImageList(apiReq));
          return apiReq || [];
        });

    } catch (error) {
      console.error(error);
    }
  };
}
export function onSuccess(message) {
  return {
    type: SUBMIT_SUCCESS,
    payload: message,
  };
}

export function postDetails(input) {
   console.log('input',input.file_name)
  const data = new FormData();
  data.append('first_name', input.first_name)
  data.append('last_name', input.last_name)
  data.append('email', input.email)
  data.append('phone', input.phone)
  data.append('user_image', {
    name: input.file_name,
    type: input.file_type,
    uri: Platform.OS === 'ios' ?
      input.file_uri.replace('file://', '')
      : input.file_uri,
  });
  console.log(data)
  return (dispatch) => {
    dispatch({ type: LOAD_IMAGES_LOADING });
    try {
      fetch('http://dev3.xicom.us/xttest/savedata.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: data
      }).then((response) => response.json())
        .then(async (responseJson) => {
          console.log(responseJson)
          const message = responseJson.message
          await dispatch(onSuccess(message));
          alert(message)
          return message || '';
        })
        .catch((e)=> {
          alert(e)
        })
      ;

    } catch (error) {
      console.error(error);
      alert(error)
    }
  };
}
