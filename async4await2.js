const timeout = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const asyncAwaitFn = async firstName => {
  await timeout(2000) // using timeout like this makes it easier to demonstrate callback -> async/await conversion

  if (!firstName) throw new Error('no first name passed in!')

  const fullName = `${firstName} Doe`

  return fullName
}

const res = async () => {
  try {
    console.log(await asyncAwaitFn('Jack'))
  } catch (e) {
    console.log(e)
  }

  try {
    console.log(await asyncAwaitFn())
  } catch (e) {
    console.log(e)
  }
}
res()
