export default function Login(dispatch, name, file) {
  return new Promise((resolve,reject) => {
      resolve('sample_user')
    })
    .then(user =>
      dispatch({
        type: "login",
        user: user
      })
    );
}
