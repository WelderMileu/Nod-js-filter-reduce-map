let open = [3,2,4,5,3,2,7,8];

const execute = open.map(( elem ) => {
	return Math.round(elem);
})

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

module.export = execute;


