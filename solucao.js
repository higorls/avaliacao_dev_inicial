function encherGalao(galao, garrafas) {
    garrafas.sort((a, b) => a < b ? 1 : -1)

    let melhorCombinacao = null
    
    for(let i = 0; i < garrafas.length; i++) {
        const combinacao = esvaziarGarrafas(garrafas, i, galao)
        if(combinacao.sobra === 0 && combinacao.garrafasUsadas.length <= i+1) {
            melhorCombinacao = combinacao
            break
        }

        if (!melhorCombinacao || combinacao.sobra > melhorCombinacao.sobra ||
            (combinacao.sobra === melhorCombinacao.sobra &&
            combinacao.garrafasUsadas.length > melhorCombinacao.garrafasUsadas.length)) {
            melhorCombinacao = combinacao;
        }

    }
    if(melhorCombinacao) {
        console.log(`Resposta: ${melhorCombinacao.garrafasUsadas.join(', ')} - Sobra: ${(melhorCombinacao.sobra * -1).toFixed(1)}L`)
    } else {
        console.log('Não foi possível encontrar uma combinação')
    }
}

function esvaziarGarrafas(garrafas, i, galao) {
    let garrafasUsadas = [`${garrafas[i]}L`]
    let sobra = parseFloat(galao - garrafas[i])
    let garrafasRestantes = parseFloat(garrafas.reduce((a, b) => a + b, 0) - garrafas[i])
    
    for(let j = 0; j < garrafas.length; j++) {
        if (sobra <= 0) break
        if (i === j) continue
        let proximaGarrafa = j+1 === i ? garrafas[j+2] : garrafas[j+1]

        garrafasRestantes = garrafasRestantes - parseFloat(garrafas[j])
        
        if (sobra - garrafas[j] >= 0 || !proximaGarrafa || garrafasRestantes < sobra) {
            sobra = Number(sobra.toFixed(1)) - Number(garrafas[j].toFixed(1))
            garrafasUsadas.push(`${garrafas[j]}L`)
        }        
    }
    return { sobra, garrafasUsadas }
}

// Testes
const exemplos = [
    {
        galao: 7,
        garrafas: [1, 3, 4.5, 1.5, 3.5]
    },
    {
        galao: 5,
        garrafas: [1, 3, 4.5, 1.5]
    },
    {
        galao: 4.9,
        garrafas: [4.5, 0.4]
    },
    {
        galao: 5,
        garrafas: [1, 3.5, 4.5, 1.5]
    },
    {
        galao: 10,
        garrafas: [1, 3.5, 4.5, 2, 8, 0.5, 10]
    },
    {
        galao: 4,
        garrafas: [3, 1, 2.5, 0.5, 2, 1.5]
    },
    {
        galao: 6,
        garrafas: [1.5, 4, 2.5, 8, 2.8, 0.6, 0.8, 1]
    },
    {
        galao: 6,
        garrafas: [1.5, 4, 2.5, 8, 2.8, 0.6, 0.7, 1]
    },
]
exemplos.forEach(({ galao, garrafas }) => encherGalao(galao, garrafas))