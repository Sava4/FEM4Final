export const OPEN_PAGE = "OPEN_PAGE";

const initialState = {};

export function staticPageReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_PAGE:
      return state.concat(action.payload);
  }
  return state;
}
