export default function Login(dispatch, name, file) {
  return new Promise((resolve,reject) => {
      resolve('guest')
    })
    .then(user =>
      dispatch({
        type: "login",
        user: user
      })
    );
}
