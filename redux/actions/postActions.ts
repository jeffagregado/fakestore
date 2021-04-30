import axios from 'axios'
import * as types from '../actionTypes'

export const fetchposts = () => async dispatch => {
    dispatch({
        type: types.GET_POSTS,
        payload: ['1st post', '2nd post', '3rd post']
    })
}

/* export const fetchposts = () => async (dispatch) => {
  const res = await axios.get('api/posts')
  dispatch({
    type: types.GET_POSTS,
    payload: res.data,
  })
} */
