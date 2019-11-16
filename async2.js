function doHomework (subject, callback) {
  console.log(`Starting my ${subject}`)
  callback()
}

function finishedWork () { console.log('Finished my homework') }
doHomework('math', () => { finishedWork() })
