function execute(url, method = 'GET', params) {
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
    // console.log(res, res.body, res.json())
    return res.json()
  })
}

function executeAuth(url, method, token, secret, params) {

}

export default {
  execute
}