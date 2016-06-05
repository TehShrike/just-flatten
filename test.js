const test = require('tape')
const flatten = require('./index.js')

test('Basic test with ints', t => {
	const input = [[1,2,[3]],4]
	const actual = flatten(input)
	t.deepEqual(actual, [1,2,3,4])
	t.deepEqual(input, [[1,2,[3]],4], 'The original array is unmodified')
	t.end()
})

test('Nested empty arrays', t => {
	t.deepEqual(flatten([[[]],[]]), [])
	t.end()
})

test('Non-array objects are copied by reference', t => {
	const A = {}
	const B = {}
	const C = {}
	const actual = flatten([A,[B,[C]]])
	t.equal(actual[0], A)
	t.equal(actual[1], B)
	t.equal(actual[2], C)
	t.end()
})
