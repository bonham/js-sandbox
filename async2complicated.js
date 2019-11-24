function doHomework (subject, callback) {
  console.log(`Starting my ${subject}`)
  return callback
}

function finishedWork () { console.log('Finished my homework'); return true }
var a = doHomework('math', () => { return finishedWork() })
console.log(a())