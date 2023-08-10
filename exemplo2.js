function cadastrar() {
  const nome = document.getElementById("nome").value;
  //ex: 5 == '5' true; 5 === '5' - false
  // typeof(palavra) = verifica o tipo de yna variável constante
  const idade = document.getElementById("idade").value;
  const email = document.getElementById("email").value;

  const pessoa ={
    nome: nome,
    idade: idade,
    email: email,
  };
  document.getElementById('result').innerHTML = pessoa.nome + '<br>'
  + pessoa.idade + "<br>" + pessoa.email;
 };

 const telefones = ["64 9 9987-4100", "62 9 9654-7845"]
 
 const produtos = [
  { nome:"TV", quantidae: 10, preco: 2500.78},
  { nome:"celular", quantidade: 5, preco: 2900.45 }
  { nome: "Notebook", quantidade: 3, preco: 3500.89 }
  { nome: "Computador", quantidade: 10, preco: 2871.45 }

 ];

 document.getElementById("result").innerHTML =
 pessoa.nome +
 "<br>" +
 pessoa.idade +
 "<br>" +
 pessoa.email +
 "<br>" +
 telefones [0] +
 "<br>" +
 produtos[2].nome;

 let lista = '';

 for (let i =0; i < produtos.length; i++) {
  lista += produtos[i].nome; //lista = lista + produtos[i]
  

 }


document.getElementById("result").innerHTML = lista 
