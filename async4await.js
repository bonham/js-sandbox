const promiseFn = firstName => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstName) reject(new Error('no first name passed in!'))

      const fullName = `${firstName} Doe`

      resolve(fullName)
    }, 2000)
  })
}

const result = (async () => {
  try {
    console.log(await promiseFn('Jim'))
  } catch (e) {
    console.log(e)
  }

  try {
    console.log(await promiseFn())
  } catch (e) {
    console.log(e)
  }
})()
