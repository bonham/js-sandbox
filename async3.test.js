var async3 = require('./async3')
var givePromi = async3.returnPromi

test('promitest', () => {
  console.log('Hier spielt die Testmusik')

  var promi = givePromi()
  console.log('Waiting for the promi to resolve')

  return promi.then(value => {
    expect(value).toBe('success')
  })
})
