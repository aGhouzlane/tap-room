export default (state = {}, action) => {
  const { name, brand, price, alcoholeContent, id } = action;
  switch (action.type) {
  case 'ADD_KEG':
    return Object.assign({}, state, {
      [id]: {
        names: name,
        brand: brand,
        price: price,
        alcoholeContent: alcoholeContent,
        id: id
      }
    });
  default:
    return state;
  }
};