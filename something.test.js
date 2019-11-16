var something = require('./something')
var fName = something.fName

test('first tests', () => {
  expect(fName(3)).toBe(5)
})
