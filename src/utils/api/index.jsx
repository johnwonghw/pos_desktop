function call(url, method = 'GET', params) {
  let postBody = {};
  if (params) {
    postBody = params
  }
  console.log(url, JSON.stringify(postBody), method)

  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postBody)
  }).then(res => {
    console.log(res)
    return res.json()
  })
}

function callAuth(url, method, token, secret, params) {

}

export default {
  call
}