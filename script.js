function numero(valor) {
  let armazenado = document.getElementById ('resultado').innerHTML;
  
  document.getElementById('resultado').innerHTML = armazenado + valor;
}

function clean () {
  document.getElementById('resultado').innerHTML = ('');
}

function erase () {
  let resultado = document.getElementById ('resultado').innerHTML;
  document.getElementById ('resultado').innerHTML = resultado.substring (0, resultado.length - 1)
  
  /* str.substring ( indexStart, indexEnd)
  indexStart: especificando a posição na string do primeiro caractere a ser incluído na substring retornada.
  indexEnd: especificando a posição na string do primeiro caractere a não ser mais incluído na substring retornada.
  
  var anyString = "Mozilla"
  console.log(anyString.substring(7,4))
  
  */
  
}

function calcular () {
  
    let calc = document.getElementById("resultado").innerHTML
    
    // pq é innerHTML e nao value?

    if (calc !== '') {
      let calc = eval(document.getElementById ("resultado").innerHTML)
      document.getElementById('resultado').innerHTML = calc 
      } else { alert ('Campo vazio!') }
   
}