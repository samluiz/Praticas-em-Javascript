        let nome = prompt(string("Digite seu nome: "))
		let idade = prompt(number("Digite sua idade: "))
		alert(`Seu nome é ${nome} e você tem ${idade} anos!`)
		if (idade >= 18) {
			alert("Você é maior de idade!")
		}
		
		else {
			alert("Você é mmenor de idade...")
		}