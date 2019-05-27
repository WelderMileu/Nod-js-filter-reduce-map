/* 
	Colocar os exemplos de reduce() da programação funcional
	Tentando resolver o problema do export e a função de calculo da função 
*/

const caras = [
	{
		nome:"Jairo",
		idade:45,
		type:"Pessoa",
		saldo_devedor:1.20
	},
	{
		nome:"Marilda",
		idade:30,
		type:"Pessoa",
		saldo_devedor:345.23
	},
	{
		nome:"Paulo",
		idade:20,
		type:"Pessoa",
		saldo_devedor:100.23
	}
]

// Soma de valores de um arrey que doidooooo cara programar funcional e muit top!!!
const soma_de_valores = caras.reduce((soma, tr) => {
	return soma + tr.saldo_devedor;
},0)

module.exports = soma_de_valores;

