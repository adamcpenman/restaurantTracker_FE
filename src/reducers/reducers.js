import {
  NEW_REST_START,
  NEW_REST_SUCCESS,
  NEW_REST_ERROR,
  DELETE_SUCCESS,
} from "../actions/actions";

import React, {
  useReducer,
  createContext
} from 'react';

export const ContactContext = createContext();


const initialState = {
  isFetching: false,
  isCreatingEvent: false,
  hasCreatedEvent: false,
  isUpdating: false,
  isDeleted: false,
  restaurant: {}
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

    //cant get DELETE REDUX to work
     case DELETE_SUCCESS: 
      const {id}  = action.payload;
     return {
       ...state,
       restaurant: state.restaurant.filter(item => item.id !== id),
       isDeleted: true
     }
         case "UPDATE_CONTACT": {
      const contact = action.payload;
      return {
        ...state,
        restaurants: state.restaurants.map(item =>
          item.id === contact.id ? contact : item
        )
      };
    }

    default:
      return state;
  }
}

export const ContactContextProvider = (props) => {
  const [state, dispatch] = useReducer(exerciseReducer, initialState);

  return(
    <ContactContext.Provider value={[state, dispatch]}>
      {props.children}
    </ContactContext.Provider>
  )
}