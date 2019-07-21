const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
	const funcs = response.data
	
    listaChina = funcs.filter(f => f.pais === 'China' && f.genero === 'F')
    listaSalario = listaChina.map(f => f.salario)
    
    menorSalario = Math.min(...listaSalario)
    menorFunc = (listaChina.filter(f => f.salario === menorSalario))

    maiorSalario = Math.max(...listaSalario)
    maiorFunc = (listaChina.filter(f => f.salario === maiorSalario))

    console.log(
        `A funcionária chinesa com menor salário é ${menorFunc[0].nome} (salário: ${menorSalario})`
    )
    
    console.log(
        `A funcionária chinesa com maior salário é ${maiorFunc[0].nome} (salário: ${maiorSalario})`
    )
})
