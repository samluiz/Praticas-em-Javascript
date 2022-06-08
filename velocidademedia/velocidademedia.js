        let distancia = parseFloat(prompt("Informe a distância percorrida em km: "))
        let tempo = parseFloat(prompt("Informe a quantidade de tempo percorrido: "))
        let velMedia = parseFloat(distancia / tempo)
        document.write("Distância percorrida em km: ", distancia, "\nTempo gasto: ", tempo, "\nVelocidade média em km/h: ", Math.round(velMedia))