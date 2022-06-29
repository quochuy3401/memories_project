const initialState = [];

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
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
