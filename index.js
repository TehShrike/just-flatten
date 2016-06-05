module.exports = function flatten(ary) {
	if (Array.isArray(ary)) {
		return ary.reduce((memo, element) => memo.concat(flatten(element)), [])
	} else {
		return ary
	}
}
