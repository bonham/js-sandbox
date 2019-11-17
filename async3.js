exports.returnPromi = function returnPromise () {
  console.log('Constructing a promi')
  var promise = new Promise(
    function (resolve) {
      setTimeout(function () { resolve('success') }, 4000)
    }
  )
  console.log('Returning the promi')
  return promise
}
