export default function list(state = {data: [], user: null}, action) {
  var newState = {data: state['data'], user: state['user']}

  switch (action.type) {
    case 'search':
      newState['data'] = action['data'];
      break;
    case 'login':
      newState['user'] = action['user'];
      break;
    default:
      break;
  }

  console.log("reduced: " + action.type);

  return newState;
}
