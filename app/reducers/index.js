export default function list(
    state = {
      data: [],
      user: 'guest',
      snack_message: '',
      login_dialog_open: false,
    },
    action
)
{
  var newState = Object.assign({}, state)

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
    case 'login_dialog_open':
      newState['login_dialog_open'] = action.login_dialog_open
      break;
    default:
      break;
  }

  console.log("reduced: " + action.type);

  return newState;
}
