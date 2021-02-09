const initialState = {
  nav: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'set-vavigation':
      return { ...state, nav: payload };

    default:
      return state;
  }
};
