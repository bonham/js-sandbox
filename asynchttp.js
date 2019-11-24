const https = require('https')

// Prepare http request
const options = {
  hostname: 'httpbin.org',
  port: 443,
  path: '/delay/1',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.log(error)
})

req.end()
