export default function SnackMessage(dispatch, message) {
  return new Promise((resolve, reject) => {
    dispatch({type: 'snack_message', snack_message: message})
    resolve(message)
  });
}
