// Define the reducer function
export const searchReducer = (
  state: any[],
  action: { type: string; payload: any }
): any => {
  switch (action.type) {
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    default:
      return state;
  }
};
