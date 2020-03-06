import {
  NEW_REST_START,
  NEW_REST_SUCCESS,
  NEW_REST_ERROR,
  REMOVE_ITEM,
  DELETE_START,
  DELETE_SUCCESS,
  DELETE
} from "../actions/actions";

const initialState = {
  isFetching: false,
  isCreatingEvent: false,
  hasCreatedEvent: false,
  isUpdating: false,
  isDeleted: false
};

export function exerciseReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_REST_START:
      return {
        ...state,
        isFetching: true,
        hasCreatedEvent: false,
        isCreatingEvent: true
      };

    case NEW_REST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        hasCreatedEvent: true,
        isCreatingEvent: false
      };

    case NEW_REST_ERROR:
      return {
        ...state,
        isFetching: false,
        hasCreatedEvent: false,
        isCreatingEvent: false
      };

     case DELETE_SUCCESS: 
     return {
       ...state,
       isDeleted: true,
       isFetching: true, 
     }
            //return state.filter(({ id }) => id !== action.payload);


    default:
      return state;
  }
}