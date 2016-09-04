export default function Search(dispatch) {
  var urlbase = location.protocol + "//" + location.host;
  var url     = urlbase + "/files";

  return fetch(url)
    .then(res => res.json())
    .then(result =>
      dispatch({
        type: "search",
        data: result
      })
    );
}
