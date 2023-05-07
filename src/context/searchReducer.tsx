// Define the reducer function
export const searchReducer = (
  state: { search: string; filters: { id: number | null; label: string } },
  action: { type: string; payload: any }
): any => {
  switch (action.type) {
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "SET_FILTER":
      if (state.filters.id === action.payload.id)
        return { ...state, filters: { id: null, label: "" } };
      return { ...state, filters: action.payload };
    default:
      return state;
  }
};
