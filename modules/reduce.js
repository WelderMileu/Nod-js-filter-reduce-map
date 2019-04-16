/* 
	Colocar os exemplos de reduce() da programação funcional
	Tentando resolver o problema do export e a função de calculo da função 
*/

const log = () => {
	const list = [0,3,2,34,234,3];
	const soma = list.map((elem) => {
		return Math.round(elem);
	})
}

const los = [23,434,34,3,45,4,2]
const som = los.map((elem)=>{
	return Math.round(elem);
})

module.exports = som;

