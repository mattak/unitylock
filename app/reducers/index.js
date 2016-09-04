export default function list(state = [], action) {
  switch (action.type) {
    case 'search':
      state = action.data;
      break;
    default:
      break;
  }

  return state;
}
