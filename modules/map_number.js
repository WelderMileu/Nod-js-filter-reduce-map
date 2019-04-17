/* map usando uma array de numeros */

let open = [3,2,4,5,3,2,7,8];

const execute = open.map(( elem ) => {
	return Math.round(elem);
})

module.exports = execute;