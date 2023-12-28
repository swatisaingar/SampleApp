import {
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILURE,
    POST_ITEM_REQUEST,
    POST_ITEM_SUCCESS,
    POST_ITEM_FAILURE,
  } from './types';
  
  // Action Creators
  export const fetchItemsRequest = () => ({ type: FETCH_ITEMS_REQUEST });
  export const fetchItemsSuccess = (items) => ({ type: FETCH_ITEMS_SUCCESS, payload: items });
  export const fetchItemsFailure = (error) => ({ type: FETCH_ITEMS_FAILURE, payload: error });
  
  export const postItemRequest = () => ({ type: POST_ITEM_REQUEST });
  export const postItemSuccess = (item) => ({ type: POST_ITEM_SUCCESS, payload: item });
  export const postItemFailure = (error) => ({ type: POST_ITEM_FAILURE, payload: error });
  