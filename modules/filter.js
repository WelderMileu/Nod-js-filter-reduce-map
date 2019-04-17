/* usando filter() da programação funcioanal */

const friends = [
	{
		animal:"Cachorro",
		nome:"Dogs",
		tamanho:1.45,
		peso:45,
		idade:4
	},
	{
		animal:"Pato",
		nome:"Jeisson",
		tamanho:0.20,
		peso:5,
		idade:5
	}
]

// Filtrar os dados da lista que desejamos mostrar na tela ou no console
const most = friends.filter((animal) => {
	return animal.nome === "Jeisson";
})

module.exports = most;