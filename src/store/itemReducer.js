import {
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILURE,
    POST_ITEM_REQUEST,
    POST_ITEM_SUCCESS,
    POST_ITEM_FAILURE,
  } from '../actions/types';
  
  const initialState = {
    items: [],
    loading: false,
    error: null,
  };
  
  const itemReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ITEMS_REQUEST:
      case POST_ITEM_REQUEST:
        return { ...state, loading: true, error: null };
  
      case FETCH_ITEMS_SUCCESS:
        return { ...state, loading: false, items: action.payload, error: null };
  
      case FETCH_ITEMS_FAILURE:
      case POST_ITEM_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      case POST_ITEM_SUCCESS:
        return { ...state, loading: false, items: [...state.items, action.payload], error: null };
  
      default:
        return state;
    }
  };
  
  export default itemReducer;
  