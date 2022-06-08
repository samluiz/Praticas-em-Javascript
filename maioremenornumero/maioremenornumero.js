        const number = []
        let i
        let flag = false
        
            for (i = 0; i < 10; i++) {
                number[i] = parseFloat(prompt("\nDigite um número: "))
                if (number[i] < 0) {
                    document.write("Número inválido.")
                    flag = true
                    break
                }
            }
    if (flag == false) {
        const min = Math.min(...number)
        const max = Math.max(...number)
        for (i = 0; i < 10; i++) {
            document.write(`[${number[i]}] `)
        }
        document.write("<br><br>")
        document.write(`O maior número é o ${max}, o menor número é o ${min}.`)
    }