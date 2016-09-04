export default function Lock(dispatch, name, file) {
  let urlbase = location.protocol + "//" + location.host;
  let url     = urlbase + "/user/" + name + "/lock";

  return fetch(url, {
      method: 'PUT',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        file: file,
      })
    })
    .then(res => res.json())
    .then(result =>
      dispatch({
        type: "lock",
        data: result
      })
    );
}
