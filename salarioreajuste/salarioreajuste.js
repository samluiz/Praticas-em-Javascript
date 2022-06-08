        let tempoServico = parseInt(prompt("Informe o tempo de serviço do funcionário (em anos): "))
        let salarioBruto = parseFloat(prompt("Informe o sálario bruto do funcionário: "))
        
        if (tempoServico >= 5 && salarioBruto < 2500) {
            let salarioReajuste = salarioBruto + (salarioBruto * 0.20)
            document.write(`Antigo salário: ${salarioBruto}\nSalário com reajuste: ${salarioReajuste}`)
        }

        else {
            let salarioReajuste = salarioBruto + (salarioBruto * 0.05)
            document.write(`Antigo salário: ${salarioBruto}\nSalário com reajuste: ${salarioReajuste}`)        
        }