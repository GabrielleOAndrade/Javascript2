function calculaPesoIdeal() {
  const altura = parseFloat (document.getElementById("altura").value);
  const sexo = document.getElementById("masc").value;

  let pesoIdealIdeal
  if (sexo == "M"){ //ex: 5 == '5' true; 5 === '5' - false
    pesoIdeal=72.7 * altura - 58;
  } else {
    pesoIdeal = 62.1 * altura - 44;
  }

  document.getElementById("result").innerHTML= pesoIdeal;
  
}
