export default (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_ITEMLIST":
      return {
        ...state,
        itemlist: [action.payload, ...state.itemlist],
      };
    default:
      return state;
  }
};
