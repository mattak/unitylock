export default function Login(dispatch, name) {
  return new Promise((resolve,reject) => {
    console.log("user: " + name)
    dispatch({
      type: "login",
      user: name, 
    })
    resolve(name)
  })
}
