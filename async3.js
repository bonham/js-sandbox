var promise = new Promise(
  function (resolve) {
    setTimeout(function () { resolve('success') }, 1000)
  })

promise.then(function (result) {
  console.log(result)
})
