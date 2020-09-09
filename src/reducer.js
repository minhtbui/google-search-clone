export const initialState = {
  term: null, //data stay in term when it's searched
};

export const actionTypes = {
  SET_SEARCH_TERM: 'SET_SEARCH_TERM', // dispatch the search term instantly
};

const reducer = (state, action) => {
  console.log(action); // for debugging the action of data layer

  switch (
    action.type // listen dispatched action
  ) {
    case actionTypes.SET_SEARCH_TERM: // identified dispatched action
      return {
        ...state, // spread the current states
        term: action.term, // change the action term from dispatched action
      };

    default:
      // return state if don't know dispatched action
      return state;
  }
};

export default reducer;
