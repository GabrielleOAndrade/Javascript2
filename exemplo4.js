function verificar() {
  const palavra = document.getElementById("palavra").value.toLowerCase();
  //ex: 5 == '5' true; 5 === '5' - false
  // typeof(palavra) = verifica o tipo de yna variável constante
  if (palavra == "") {
    document.getElementById("result").innerHTML =
      "NÃO FOI INFORMADA NENHUMA PALAVRA";
  } else {
    const inversa = palavra.split("").reverse().join("");

    if (palavra == inversa) {
      document.getElementById("result").innerHTML = "SIM";
    } else {
      document.getElementById("result").innerHTML = "NÃO";
    }
  }
}
function limpar() {
  document.getElementById("result").innerHTML = "";
}
