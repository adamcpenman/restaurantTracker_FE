import {
  NEW_TASK_START,
  NEW_TASK_SUCCESS,
  NEW_TASK_ERROR,
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
    case NEW_TASK_START:
      return {
        ...state,
        isFetching: true,
        hasCreatedEvent: false,
        isCreatingEvent: true
      };

    case NEW_TASK_SUCCESS:
      return {
        ...state,
        isFetching: false,
        hasCreatedEvent: true,
        isCreatingEvent: false
      };

    case NEW_TASK_ERROR:
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