const initialState = [];

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE":
      return state.map((post) => post._id === action.payload._id ? action.payload : post)
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      const newState = [...state, action.payload];
      return newState;
    default:
      return state;
  }
};

export default postsReducer;
