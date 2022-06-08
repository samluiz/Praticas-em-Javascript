        let conta = parseFloat(prompt("Informe o total da conta: ")) 

        let conta10 = parseFloat(conta * 0.10)
        let contaFinal = parseFloat(conta + conta10)

        document.write("Valor gasto: ", conta, "\n10% adicional: ", conta10, "\nValor final: ", contaFinal, ".")