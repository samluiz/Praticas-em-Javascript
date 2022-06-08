        let idade = parseInt(prompt("Informe sua idade: "))
        
        if (idade <= 12 && idade >= 0) {
            document.write("Você é criança!")
        }
        else if (idade > 12 && idade <= 18) {
            document.write("Você é adolescente!")
        }
        else if (idade > 18) {
            document.write("Você é adulto!")
        }
        else {
            document.write("Insira uma idade válida.")
        }
        