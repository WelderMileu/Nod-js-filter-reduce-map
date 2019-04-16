/* Função para poder testar o export */

const mensagem = (prm1, prm2) => {
	const soma = prm1*prm2;
	return `O Total da soma dos valores e ${soma}`;
}

module.exports = mensagem;