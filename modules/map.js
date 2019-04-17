/* map usando json uma lista de usuarios */

let time = [
	{
		nome:"Marilda",
		idade:23,
		"casado(a)":false
	},

	{
		nome:"Paulo",
		idade:45,
		"casado(a)":true
	},

	{
		nome:"Marina",
		idade:23,
		"casado(a)":true
	}
]

const exc = time.map((elem) => {
	return elem;
})

module.exports = exc;


