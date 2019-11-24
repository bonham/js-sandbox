const callbackFn = (firstName, callback) => {
  setTimeout(() => {
    if (!firstName) return callback(new Error('no first name passed in!'))

    const fullName = `${firstName} Doe`

    return callback(fullName)
  }, 2000)
}

callbackFn('John', console.log)
callbackFn(null, console.log)
