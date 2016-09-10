export default function LoginDialogAction(dispatch, open) {
  return new Promise((resolve, reject) => {
    dispatch({
      type: 'login_dialog_open',
      login_dialog_open: open,
    })
    resolve(open)
  })
}
