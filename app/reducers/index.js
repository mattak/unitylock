export default function list(
    state = {
      data: [],
      user: null,
      snack_message: '',
    },
    action
)
{
  var newState = {data: state['data'], user: state['user']}

  switch (action.type) {
    case 'search':
      newState['data'] = action['data']
      break;
    case 'login':
      newState['user'] = action['user']
      break;
    case 'snack_message':
      newState['snack_message'] = action['snack_message']
      break;
    default:
      break;
  }

  console.log("reduced: " + action.type);

  return newState;
}
