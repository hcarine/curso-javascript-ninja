(function(){
	/*
	Envolva todo o conteúdo desse arquivo em uma IIFE.
	*/

	/*
	Crie um objeto chamado `person`, com as propriedades:
	    `name`: String
	    `lastname`: String
	    `age`: Number
	Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
	de valor para cada propriedade.
	*/
	// ?
	console.log( 'Propriedades de "person":' );
	var person= {
		name: "ANA",
		age: 20,
		weight: 165,
		birthday: "15/08/1990" //?type data?
	}

	/*
	Mostre no console, em um array, todas as propriedades do objeto acima.
	Não use nenhuma estrutura de repetição, nem crie o array manualmente.
	*/
	console.log(person)

	/*
	Crie um array vazio chamado `books`.
	*/
	var books = []

	/*
	Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
	seguintes propriedades:
	`name`: String
	`pages`: Number
	*/
	// ?
	console.log( '\nLista de livros:' );
	books.push({
		name: "The best",
		pages: 200
	})
	books.push({
		name: "Same best",
		pages: 201
	})
			books.push({
		name: "again best",
		pages: 222
	})

	/*
	Mostre no console todos os livros.
	*/
	console.log(books)

	console.log( '\nLivro que está sendo removido:'+ books[books.length-1].name );
	/*
	Remova o último livro, e mostre-o no console.
	*/
	books.pop()

	console.log( '\nAgora sobraram somente os livros:' );
	/*
	Mostre no console os livros restantes.
	*/
	console.log(books)

	/*
	Converta os objetos que ficaram em `books` para strings.
	*/
	// ?
	console.log( '\nLivros em formato string:' );
	books = JSON.stringify(books)

	/*
	Mostre os livros nesse formato no console:
	*/
	console.log(books)

	/*
	Converta os livros novamente para objeto.
	*/
	books = JSON.parse(books)
	console.log( '\nAgora os livros são objetos novamente:' );

	/*
	Mostre no console todas as propriedades e valores de todos os livros,
	no formato abaixo:
	    "[PROPRIEDADE]: [VALOR]"
	*/
	console.log(books)

	/*
	Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
	seu nome. Adicione seu nome completo no array.
	*/
	var myName = ['c','a','r','i','n','e']
	console.log( '\nMeu nome é:' );

	/*
	Juntando todos os itens do array, mostre no console seu nome.
	*/
	
	console.log(myName.join(""))

	console.log( '\nMeu nome invertido é:' );
	/*
	Ainda usando o objeto acima, mostre no console seu nome invertido.
	*/
	myName.reverse()
	console.log(myName.join(""))

	console.log( '\nAgora em ordem alfabética:' );
	/*
	Mostre todos os itens do array acima, odenados alfabéticamente.
	*/
	myName.sort()
	console.log(myName.join(""))
})()