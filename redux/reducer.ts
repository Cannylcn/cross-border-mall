import { actionTypes } from "./actionTypes";

export const exampleInitialState = {
  count: 9,
};
function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.ADD_CART:
      return {
        ...state,
        ...{ count: state.count + 1 },
      };
    default:
      return state;
  }
}

export default reducer;
