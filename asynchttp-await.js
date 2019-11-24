const https = require('https')

// Function with one parameter: url
const synchHttpGet = async url => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const status = response.statusCode

      if (status !== 200) reject(new Error(`Response status ${status}`))

      var allChunks = []
      response.on('data', chunk => {
        allChunks.push(chunk)
      }).on('end', () => {
        const bodyBuffer = Buffer.concat(allChunks)
        resolve(bodyBuffer.toString())
      })
    }).on('error', e => {
      reject(e)
    })
  })
}

const execMain = async () => {
  try {
    console.log(await synchHttpGet('https://httpbin.org/delay/1'))
  } catch (e) {
    console.log(`Ooops: ${e}`)
  }

  try {
    console.log(await synchHttpGet('https://httpbin.org/status/404'))
  } catch (e) {
    console.log(`Ooops: ${e}`)
  }

  try {
    console.log(await synchHttpGet('https://httpbinnnn.org/delay/1'))
  } catch (e) {
    console.log(`Ooops: ${e}`)
  }
}
execMain()
