        let numbers = [] 
        let i
        
        for (i = 0; i < 4; i++) {
            numbers[i] = parseInt(prompt("Insira um número: "))
        }

        for (i = 3; i >= 0; i--) {
            document.write("[", numbers[i], "]")
        }