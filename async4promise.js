const promiseFn = firstName => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstName) reject(new Error('no first name passed in!'))

      const fullName = `${firstName} Doe`

      resolve(fullName)
    }, 2000)
  })
}

promiseFn('Jane').then(console.log)
promiseFn().catch(console.log)
