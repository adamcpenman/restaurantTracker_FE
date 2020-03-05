import {
  NEW_REST_START,
  NEW_REST_SUCCESS,
  NEW_REST_ERROR,
} from "../actions/actions";

const initialState = {
  isFetching: false,
  isCreatingEvent: false,
  hasCreatedEvent: false,
  exerciseList: [],
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

    default:
      return state;
  }
}